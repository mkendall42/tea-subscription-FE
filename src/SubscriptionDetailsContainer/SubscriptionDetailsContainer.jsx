import StatusButtonContainer from "../StatusButtonContainer/StatusButtonContainer"

function SubscriptionDetailsContainer({ detailedInfo }) {

    //BE API call to get detailed info on subscription
    //Optional: could do external API call to get a tea image / whatever
    //Optional: could have a button to get tea details, customer details, whatever (would involve more implemented controller actions too...)
    return (
        <section>
            <h3>SubscriptionDetailsContainer:</h3>
            <StatusButtonContainer />
        </section>
    )
}

export default SubscriptionDetailsContainer
