import "./SubscriptionsListContainer.css"
import SubscriptionButtonContainer from "../SubscriptionButtonContainer/SubscriptionButtonContainer"
import teaImage1 from "../assets/teaBagsImage.jpg"
import teaImage2 from "../assets/chai-tea.jpg"
import teaImage3 from "../assets/green-tea.jpg"
import teaImage4 from "../assets/herbaltea.jpg"
import teaImage5 from "../assets/licorice-tea.jpg"
import teaImage6 from "../assets/mint-tea.jpg"
import teaImage7 from "../assets/sleepytime.jpg"

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SubscriptionsListContainer({ subscriptions, setSubscriptions, filteredSubscriptions, detailedInfo, setDetailedInfo, setCurrentError }) {
    const navigateToPage = useNavigate()

    //Create image array for display (later could randomly sample or gen via API call)
    const imageFiles = [teaImage1, teaImage2, teaImage3, teaImage4, teaImage5, teaImage6, teaImage7]

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

    const generateButtonList = () => {
        if (filteredSubscriptions.length === 0) {
            return <p>Empty list (no filteredSubscriptions present)</p>
        } else {
            return filteredSubscriptions.sort((subscription1, subscription2) => {       //Needed because BE DB returns results based on updated_at timestamp
                return subscription1.id - subscription2.id
            }).map((subscription, i) => {
                return (
                    <SubscriptionButtonContainer
                        key={subscription.id}
                        subscriptionInfo={subscription}
                        setDetailedInfo={setDetailedInfo}
                        setCurrentError={setCurrentError}
                        imageFile={imageFiles[i]}
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
