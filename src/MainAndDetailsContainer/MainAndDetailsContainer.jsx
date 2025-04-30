import SearchFilterContainer from "../SearchFilterContainer/SearchFilterContainer"
import SubscriptionsListContainer from "../SubscriptionsListContainer/SubscriptionsListContainer"

function MainAndDetailsContainer() {
    const [detailedInfo, setDetailedInfo] = useState({})

    return (
        <div>
            <h2>MainAndDetailsContainer:</h2>
            <SearchFilterContainer />
            <SubscriptionsListContainer setDetailedInfo={setDetailedInfo} />
            <SubscriptionDetailsContainer detailedInfo={detailedInfo} />
        </div>
    )
}

export default MainAndDetailsContainer
