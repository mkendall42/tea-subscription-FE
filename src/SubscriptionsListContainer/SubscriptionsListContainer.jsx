import "./SubscriptionsListContainer.css"
import SubscriptionButtonContainer from "../SubscriptionButtonContainer/SubscriptionButtonContainer"

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SubscriptionsListContainer({ subscriptions, setSubscriptions, filteredSubscriptions, detailedInfo, setDetailedInfo, setCurrentError }) {
    const navigateToPage = useNavigate()

    //BE API call to get list of subscriptions.  Needs to trigger rendering when status button (and therefore 'detailedInfo') changes
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/subscriptions")
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}: failed to retrieve list of subscriptions.`)
            }

            return response.json()
        })
        .then(subscriptionsData => {
            console.log("Incoming data array: ", subscriptionsData)
            setSubscriptions(subscriptionsData.data.subscriptions)
        })
        .catch(error => {
            setCurrentError(error)
            navigateToPage('/error')
        })
    }, [detailedInfo])

    //Generate list of buttons, then render below.  Do I need useEffect, or is this not really needed?  I'm trying to reduce renders / method calls, mostly...
    //Definitely clean this up later, since the render in return() is separately calling it.  Either set to var, or just one function call!
    // useEffect(() => generateButtonList, [subscriptions])
    
    const generateButtonList = () => {

        // console.log("Generating button list...")
        // console.log("subscriptions: ", subscriptions)
        // console.log("filteredSubscriptions: ", filteredSubscriptions)

        if (filteredSubscriptions.length === 0) {
            return <p>Empty list (no filteredSubscriptions present)</p>
        } else {
            return filteredSubscriptions.sort((subscription1, subscription2) => {       //Needed because BE DB returns results based on updated_at timestamp
                return subscription1.id - subscription2.id
            }).map((subscription) => {
                return (
                    <SubscriptionButtonContainer
                        key={subscription.id}
                        subscriptionInfo={subscription}
                        setDetailedInfo={setDetailedInfo}
                        setCurrentError={setCurrentError}
                    />
                )
            })
        }
    }

    return (
        <section className="subscriptions-list">
            <h3>Subscriptions in Database:</h3>
            <hr></hr>
            <div className="buttons-list">
                {generateButtonList()}
            </div>
        </section>
    )
}

export default SubscriptionsListContainer
