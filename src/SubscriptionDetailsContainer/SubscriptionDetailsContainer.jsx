import "./SubscriptionDetailsContainer.css"
import StatusButtonContainer from "../StatusButtonContainer/StatusButtonContainer"

function SubscriptionDetailsContainer({ detailedInfo, setDetailedInfo, setCurrentError }) {
    let statusColorClass = ""
    if (detailedInfo.data.status === "active") {
        statusColorClass = "show-green"
    } else {
        statusColorClass = "show-red"
    }

    return (
        <section className="show-details-box">
            <h3>{`Subscription Details: ${detailedInfo.data.title}`}</h3>
            <hr></hr>
            <details>
                <summary>Subscription Information</summary>
                <p className={statusColorClass}> {` Present status: ${detailedInfo.data.status}`}</p>
                <p>{` Price: $${detailedInfo.data.price}`}</p>
                <p>{` Frequency: ${detailedInfo.data.frequency} / month`}</p>
            </details>
            <details>
                <summary>Tea Information</summary>
                <p>{`Name: ${detailedInfo.data.tea.title}`}</p>
                <p>{`Description: ${detailedInfo.data.tea.description}`}</p>
                <p>{`Brew temperature: ${detailedInfo.data.tea.temperature} deg C`}</p>
                <p>{`Brew time: ${detailedInfo.data.tea.brew_time} s`}</p>
            </details>
            <details>
                <summary>Customer Information</summary>
                <p>{`Full name: ${detailedInfo.data.customer.first_name} ${detailedInfo.data.customer.last_name}`}</p>
                <p>{`Email: ${detailedInfo.data.customer.email}`}</p>
                <p>{`Address: ${detailedInfo.data.customer.address}`}</p>
            </details>
            <StatusButtonContainer detailedInfo={detailedInfo} setDetailedInfo={setDetailedInfo} setCurrentError={setCurrentError} />
        </section>
    )
}

export default SubscriptionDetailsContainer
