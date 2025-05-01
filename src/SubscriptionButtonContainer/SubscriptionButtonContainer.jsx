import "./SubscriptionButtonContainer.css"
import { getDetailedInfo } from "../apiCalls.js"
import { useNavigate } from 'react-router-dom'

function SubscriptionButtonContainer({ subscriptionInfo, setDetailedInfo, setCurrentError, imageFile }) {
    const navigateToPage = useNavigate()

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
