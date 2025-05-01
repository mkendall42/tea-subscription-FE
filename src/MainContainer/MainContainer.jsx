import "./MainContainer.css"
import SearchFilterContainer from "../SearchFilterContainer/SearchFilterContainer"
import SubscriptionsListContainer from "../SubscriptionsListContainer/SubscriptionsListContainer"
import SubscriptionDetailsContainer from "../SubscriptionDetailsContainer/SubscriptionDetailsContainer"
import { getDetailedInfo } from "../apiCalls.js"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MainContainer({ isShowDetails, setCurrentError }) {
    const [detailedInfo, setDetailedInfo] = useState({})
    const [isDetailsView, setIsDetailsView] = useState(false)
    const [subscriptions, setSubscriptions] = useState([])
    const [filteredSubscriptions, setFilteredSubscriptions] = useState([])
    const navigateToPage = useNavigate()
    const { subscription_id } = useParams()

    useEffect(() => {
        if (Object.keys(detailedInfo).length === 0) {
            setIsDetailsView(false)
        } else {
            setIsDetailsView(true)
        }
    }, [detailedInfo])

    useEffect(() => {
        if (isShowDetails) {
        getDetailedInfo(subscription_id, setDetailedInfo, navigateToPage, setCurrentError)
        }
    }, [])

    //If isShowDetails, do a manual load right now (would be good to move to utility file)
    // if (isShowDetails) {
    //     //Load from BE right now!
    //     getDetailedInfo(subscription_id, setDetailedInfo, navigateToPage, setCurrentError)
    //     // export function getCreatureDetails(creatureType, id) {
    //     //     return creaturesData[creatureType].find(creature => {
    //     //       return creature.id === parseInt(id)
    //     //     });
    //     //   }
    // }
    
    return (
        <div className="main-layout">
            <div className="left-window-side">
                <SearchFilterContainer
                    subscriptions={subscriptions}
                    setFilteredSubscriptions={setFilteredSubscriptions}
                />
                <SubscriptionsListContainer
                    subscriptions={subscriptions}
                    setSubscriptions={setSubscriptions}
                    filteredSubscriptions={filteredSubscriptions}
                    detailedInfo={detailedInfo}
                    setDetailedInfo={setDetailedInfo}
                    setCurrentError={setCurrentError}
                />
            </div>
            {isDetailsView && <SubscriptionDetailsContainer className="right-window-side" detailedInfo={detailedInfo} setDetailedInfo={setDetailedInfo} setCurrentError={setCurrentError} />}
        </div>
    )
}

export default MainContainer