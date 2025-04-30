import StatusButtonContainer from "../StatusButtonContainer/StatusButtonContainer"

function SubscriptionDetailsContainer({ detailedInfo, setDetailedInfo }) {

    //BE API call to get detailed info on subscription
    //Optional: could do external API call to get a tea image / whatever
    //Optional: could have a button to get tea details, customer details, whatever (would involve more implemented controller actions too...)

    //Handle alert on changed status
    return (
        <section>
            <h3>SubscriptionDetailsContainer:</h3>
            <StatusButtonContainer detailedInfo={detailedInfo} setDetailedInfo={setDetailedInfo} />
        </section>
    )
}

export default SubscriptionDetailsContainer
