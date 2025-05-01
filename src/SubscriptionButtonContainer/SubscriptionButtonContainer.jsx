import "./SubscriptionButtonContainer.css"
import { getDetailedInfo } from "../apiCalls.js"
import { useNavigate } from 'react-router-dom'

function SubscriptionButtonContainer({ subscriptionInfo, setDetailedInfo, setCurrentError, imageFile }) {
    const navigateToPage = useNavigate()

    //API BE call to get detailed info for display
    // const getDetailedInfo = () => {
    //     fetch(`http://localhost:3000/api/v1/subscriptions/${subscriptionInfo.id}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`${response.status}: failed to retrieve details for subscription with id=${subscriptionInfo.id}`)
    //             }

    //             return response.json()
    //         })
    //         .then(data => {
    //             console.log("Incoming subscription details: ", data)
    //             setDetailedInfo(data)
    //             navigateToPage(`/${subscriptionInfo.id}`)
    //         })
    //         .catch(error => {
    //             setCurrentError(error)
    //             navigateToPage('/error')
    //         })
    // }

    

    return (
        <button className="subscription-button" onClick={() => getDetailedInfo(subscriptionInfo.id, setDetailedInfo, navigateToPage, setCurrentError)}>
            <div className="wrapper">
                <p className="larger-font">{subscriptionInfo.title}</p>
                <p className="smaller-font">{`(${subscriptionInfo.status})`}</p>
            </div>
            <img src={imageFile}></img>
        </button>
    )
}

export default SubscriptionButtonContainer
