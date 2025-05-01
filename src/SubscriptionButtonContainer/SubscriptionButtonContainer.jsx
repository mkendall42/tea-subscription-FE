// import SubscriptionsListContainer from '../SubscriptionsListContainer/SubscriptionsListContainer'
import teaImage from "../assets/teaBagsImage.jpg"
import "./SubscriptionButtonContainer.css"
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SubscriptionButtonContainer({ subscriptionInfo, setDetailedInfo }) {
    const navigateToPage = useNavigate()

    //API BE call to get detailed info for display
    const getDetailedInfo = () => {
        fetch(`http://localhost:3000/api/v1/subscriptions/${subscriptionInfo.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}: failed to retrieve details for subscription with id=${subscriptionInfo.id}`)
                }

                return response.json()
            })
            .then(data => {
                console.log("Incoming subscription details: ", data)
                setDetailedInfo(data)
                navigateToPage(`/${subscriptionInfo.id}`)
            })
            .catch(error => {
                // console.error("Error: ", error)
                setCurrentError(error)
                navigateToPage('/error')
            })
    }

    return (
        <button className="subscription-button" onClick={() => getDetailedInfo()}>
            {/* <h4>SubscriptionButtonContainer:</h4> */}
            <div className="wrapper">
                <p className="larger-font">{subscriptionInfo.title}</p>
                <p className="smaller-font">{`(${subscriptionInfo.status})`}</p>
            </div>
            <img src={teaImage}></img>
        </button>
    )
}

export default SubscriptionButtonContainer
