import SubscriptionButtonContainer from "../SubscriptionButtonContainer/SubscriptionButtonContainer"

function SubscriptionsListContainer() {
    return (
        <div>
            <h3>SubscriptionsListContainer:</h3>
            <SubscriptionButtonContainer />
            {/* Not sure if I should render SubscriptionsDetailsContainer here, or from MainContainer */}
        </div>
    )
}

export default SubscriptionsListContainer
