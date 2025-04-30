import SubscriptionButtonContainer from "../SubscriptionButtonContainer/SubscriptionButtonContainer"
import { useState, useEffect } from 'react'

function SubscriptionsListContainer() {
    const [subscriptions, setSubscriptions] = useState([])

    //Have BE API call to get list of subscriptions (names, IDs, and maybe even status)
    //Doesn't need to render often (unless status of one is changed - trigger w/ the button perhaps)
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/subscriptions")
        .then(response => response.json())
        .then(subscriptionsData => {
            console.log("Incoming data array: ", subscriptionsData)
            setSubscriptions(subscriptionsData.data.subscriptions)
        })
        .catch(error => {
            console.error("Error: ", error)
        })
    }, [])

    //Generate list of buttons, then render below.  Do I need useEffect, or is this not really needed?  I'm trying to reduce renders / method calls, mostly...
    //Definitely clean this up later, since the render in return() is separately calling it.  Either set to var, or just one function call!
    useEffect(() => generateButtonList, [subscriptions])
    
    const generateButtonList = () => {
        if (subscriptions.length === 0) {
            return <p>Empty list (no subscriptions present)</p>
        } else {
            return subscriptions.map((subscription) => {
                return <SubscriptionButtonContainer key={subscription.id} subscriptionInfo={subscription} />
            })
        }
    }

    return (
        <section>
            <h3>SubscriptionsListContainer:</h3>
            {/* <SubscriptionButtonContainer /> */}
            {generateButtonList()}
            {/* Not sure if I should render SubscriptionsDetailsContainer here, or from MainContainer */}
        </section>
    )
}

export default SubscriptionsListContainer
