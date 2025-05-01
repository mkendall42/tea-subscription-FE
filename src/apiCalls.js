//Utility file for housing specific BE API call(s)
export const getDetailedInfo = (subscriptionId, setDetailedInfo, navigateToPage, setCurrentError) => {
    fetch(`http://localhost:3000/api/v1/subscriptions/${subscriptionId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}: failed to retrieve details for subscription with id=${subscriptionId}`)
                }

                return response.json()
            })
            .then(data => {
                console.log("Incoming subscription details: ", data)
                setDetailedInfo(data)
                navigateToPage(`/${subscriptionId}`)
            })
            .catch(error => {
                setCurrentError(error)
                navigateToPage('/error')
            })
}