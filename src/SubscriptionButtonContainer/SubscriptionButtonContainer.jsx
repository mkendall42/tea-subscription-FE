// import SubscriptionsListContainer from '../SubscriptionsListContainer/SubscriptionsListContainer'
import teaImage from "../assets/teaBagsImage.jpg"
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
        <button className="subscription-button" onClick={() => getDetailedInfo()}>
            {/* <h4>SubscriptionButtonContainer:</h4> */}
            <div className="wrapper">
                <p>{subscriptionInfo.title}</p>
                <p>{`(${subscriptionInfo.status})`}</p>
            </div>
            <img src={teaImage}></img>
        </button>
    )
}

export default SubscriptionButtonContainer
