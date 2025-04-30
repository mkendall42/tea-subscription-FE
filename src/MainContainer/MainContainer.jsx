import SearchFilterContainer from "../SearchFilterContainer/SearchFilterContainer"
import SubscriptionsListContainer from "../SubscriptionsListContainer/SubscriptionsListContainer"
import SubscriptionDetailsContainer from "../SubscriptionDetailsContainer/SubscriptionDetailsContainer"
import { useState, useEffect } from 'react'

function MainContainer() {
    const [detailedInfo, setDetailedInfo] = useState({})
    const [isDetailsView, setIsDetailsView] = useState(false)
    const [subscriptions, setSubscriptions] = useState([])
    const [filteredSubscriptions, setFilteredSubscriptions] = useState([])

    //There's probably a better way than this, especially since it introduces another state var; at least now further references are quick
    useEffect(() => {
        if (Object.keys(detailedInfo).length === 0) {
            setIsDetailsView(false)
        } else {
            setIsDetailsView(true)
        }
    }, [detailedInfo])
    
    return (
        <div>
            <h2>MainContainer:</h2>
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
            />
            {isDetailsView && <SubscriptionDetailsContainer detailedInfo={detailedInfo} setDetailedInfo={setDetailedInfo} />}
            {/* Not sure if I should render SubscriptionsDetailsContainer here, or from SubscriptionsListContainer */}
        </div>
    )
}

export default MainContainer