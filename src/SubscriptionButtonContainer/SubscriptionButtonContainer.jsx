function SubscriptionButtonContainer({ subscriptionInfo }) {
    return (
        <div>
            <h4>SubscriptionButtonContainer:</h4>
            <p>{subscriptionInfo.title}</p>
            <p>{subscriptionInfo.id}</p>
            <p>{subscriptionInfo.status}</p>
        </div>
    )
}

export default SubscriptionButtonContainer
