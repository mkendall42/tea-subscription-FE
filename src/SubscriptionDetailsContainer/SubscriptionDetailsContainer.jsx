import StatusButtonContainer from "../StatusButtonContainer/StatusButtonContainer"

function SubscriptionDetailsContainer({ detailedInfo, setDetailedInfo }) {

    //BE API call to get detailed info on subscription
    //Optional: could do external API call to get a tea image / whatever
    //Optional: could have a button to get tea details, customer details, whatever (would involve more implemented controller actions too...)

    //NOTE: do I need to add more BE endpoints to send tea and customer data?  Or is a huge serializer / JSON response acceptable here?  I'm probably just gonna do the latter...

    //Handle alert on changed status
    //Would be nice to color the text for status type
    return (
        <section>
            <h3>SubscriptionDetailsContainer:</h3>
            <h4>Subscription Information:</h4>
            <details>
                <summary>Subscription Information</summary>
                <p>{`Name / bundle: ${detailedInfo.data.title}`}</p>
                <p>{`Present status: ${detailedInfo.data.status}`}</p>
                <p>{`Price: $${detailedInfo.data.price}`}</p>
                <p>{`Frequency: ${detailedInfo.data.frequency} / month`}</p>
            </details>
            <details>
                <summary>Tea Information</summary>
                <p>{`Name: ${detailedInfo.data.tea.title}`}</p>
                <p>{`Description: ${detailedInfo.data.tea.description}`}</p>
                <p>{`Brew temperature: ${detailedInfo.data.tea.temperature}`}</p>
                <p>{`Brew time: ${detailedInfo.data.tea.brew_time}`}</p>
            </details>
            <details>
                <summary>Customer Information</summary>
                <p>{`Full name: ${detailedInfo.data.customer.first_name} ${detailedInfo.data.customer.last_name}`}</p>
                <p>{`Email: ${detailedInfo.data.customer.email}`}</p>
                <p>{`Address: ${detailedInfo.data.customer.address}`}</p>
            </details>
            {/* <h4>Tea Information:</h4>
            <h4>Customer Information:</h4> */}
            <StatusButtonContainer detailedInfo={detailedInfo} setDetailedInfo={setDetailedInfo} />
        </section>
    )
}

export default SubscriptionDetailsContainer
