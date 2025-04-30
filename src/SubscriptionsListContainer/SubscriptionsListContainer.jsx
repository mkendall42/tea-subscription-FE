import "./SubscriptionsListContainer.css"
import SubscriptionButtonContainer from "../SubscriptionButtonContainer/SubscriptionButtonContainer"

import { useState, useEffect } from 'react'

function SubscriptionsListContainer({ subscriptions, setSubscriptions, filteredSubscriptions, detailedInfo, setDetailedInfo }) {
    // const [subscriptions, setSubscriptions] = useState([])

    console.log("filteredSubscriptions: ", filteredSubscriptions)

    //Have BE API call to get list of subscriptions (names, IDs, and maybe even status)
    //Doesn't need to render often (unless status of one is changed - trigger w/ the button perhaps)
    useEffect(() => {
        // console.log("I'm here")
        fetch("http://localhost:3000/api/v1/subscriptions")
        .then(response => response.json())
        .then(subscriptionsData => {
            console.log("Incoming data array: ", subscriptionsData)
            setSubscriptions(subscriptionsData.data.subscriptions)
        })
        .catch(error => {
            console.error("Error: ", error)
        })
    }, [detailedInfo])          //I'd rather this just be [] (on mount), but I need it to trigger anytime detailsInfo changes.  I'd rather not do BE calls each time though (caching?)

    //Generate list of buttons, then render below.  Do I need useEffect, or is this not really needed?  I'm trying to reduce renders / method calls, mostly...
    //Definitely clean this up later, since the render in return() is separately calling it.  Either set to var, or just one function call!
    useEffect(() => generateButtonList, [subscriptions])
    
    const generateButtonList = () => {

        console.log("Generating button list...")
        console.log("subscriptions: ", subscriptions)
        console.log("filteredSubscriptions: ", filteredSubscriptions)

        // if(!filteredSubscriptions) {
            
        // }

        // debugger

        if (filteredSubscriptions.length === 0) {
            return <p>Empty list (no filteredSubscriptions present)</p>
        } else {
            return filteredSubscriptions.sort((subscription1, subscription2) => {       //Needed because BE DB returns results based on updated_at timestamp, apparently
                return subscription1.id - subscription2.id
            }).map((subscription) => {
                return <SubscriptionButtonContainer key={subscription.id} subscriptionInfo={subscription} setDetailedInfo={setDetailedInfo} />
            })
        }
    }

    return (
        <section className="subscriptions-list">
            <h3>Subscriptions in Database:</h3>
            {/* <SubscriptionButtonContainer /> */}
            <div className="buttons-list">
                {generateButtonList()}
            </div>
            {/* Not sure if I should render SubscriptionsDetailsContainer here, or from MainContainer */}
        </section>
    )
}

export default SubscriptionsListContainer
