// import SubscriptionsListContainer from '../SubscriptionsListContainer/SubscriptionsListContainer'
import "./SubscriptionButtonContainer.css"
import { useState } from 'react'

function SubscriptionButtonContainer({ subscriptionInfo, setDetailedInfo }) {
    //API BE call to get detailed info for display
    const getDetailedInfo = () => {
        fetch(`http://localhost:3000/api/v1/subscriptions/${subscriptionInfo.id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Incoming subscription details: ", data)
                setDetailedInfo(data)
            })
            .catch(error => {
                console.error("Error: ", error)
            })
    }

    return (
        <button onClick={() => getDetailedInfo()}>
            <h4>SubscriptionButtonContainer:</h4>
            <p>{subscriptionInfo.title}</p>
            <p>Image goes here</p>
            <p>{`(${subscriptionInfo.status})`}</p>
        </button>
    )
}

export default SubscriptionButtonContainer
