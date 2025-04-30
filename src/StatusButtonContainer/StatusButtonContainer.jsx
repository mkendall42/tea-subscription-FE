import "./StatusButtonContainer.css"
import { useState, useEffect } from 'react'

function StatusButtonContainer({ detailedInfo, setDetailedInfo }) {
    const [currentStatus, setCurrentStatus] = useState("Cancel")

    //Required to ensure the button always displays text correctly
    // useEffect(() => changeStatus(true), [detailedInfo])
    useEffect(() => {
        if (currentStatus !== "Status updated!") {
            toggleStatusDisplay(detailedInfo.data.status)
        }
    }, [detailedInfo])

    const getToggledStatus = (oldStatus) => {
        //Simple, just re-used a lot
        if (oldStatus === "active") {
            return "cancelled"
        } else if (oldStatus === "cancelled") {
            return "active"
        } else {
            return "Houston, we have a problem"
        }
    }

    //BE API call to change status (cancel, or re-activate)
    const changeStatus = () => {
        //Check what is presently in detailedInfo, then toggle
        // console.log("Detailed information: ", detailedInfo)
        // console.log("Status: ", detailedInfo.data.status)
        //Add full functionality later
        const oldStatus = detailedInfo.data.status

        //BE API call to change status (toggle)
        //Figure out the new status
        // let newStatus = ""
        // if (currentStatus === "Re-activate this subscription") {
        //     newStatus = "active"
        // } else {
        //     newStatus = "cancelled"
        // }
        const newStatus = getToggledStatus(oldStatus)

        const bodyParams = { "status": newStatus }
        const httpParams = {
            //Method, headers, body
            method: "PATCH",
            body: JSON.stringify(bodyParams),
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": true }
        }

        
        //NOTE: 'result' keeps coming back with missing JSON data, so that 'responseData' becomes 'undefined'.  I've tried several things.
        //I have no idea what is wrong.  This method is actually updating status correctly on the BE, I just can't seem to get the response?!
        //Is it a CORS thing?  Something else?  There was an ActiveRecord/ApplicationController error with forbidding ':subscription', so
        //I changed the Rails config.  And still no luck!!!
        //FOR NOW, just skip all of this checking, and set the new status message on the button, etc to see if it looks alright...
        fetch(`http://localhost:3000/api/v1/subscriptions/${detailedInfo.data.id}`, httpParams)
            .then(result => {
                console.log("Results: ", result)
                
                //Create a structured clone, change 'status', then re-save
                let newDetailedInfo = structuredClone(detailedInfo)
                newDetailedInfo.data.status = newStatus
                setDetailedInfo(newDetailedInfo)
                
                // debugger
                
                setCurrentStatus("Status updated!")
                //Again, just do the (basic) thing for now
                setTimeout(() => {
                    console.log("Timeout reached!")
                    // setSaveButtonMessage("Results already saved")
                    toggleStatusDisplay(newStatus)
                }, 1500)
            })
            .catch(error => {
                console.log("Error: ", error)
            })
        // fetch(`http://localhost:3000/api/v1/subscriptions/${detailedInfo.data.id}`, httpParams)
        //     .then(result => {
        //         console.log("Results: ", result)

        //         debugger
                
        //         result.json()})
        //     .then(responseData => {

        //         console.log("Response data: ", responseData)
        //         console.log("Old status: ", responseData.data.old_status)
        //         console.log("New status: ", responseData.data.new_status)
        //         //If 200-level status code (should be, we got here), and 'status' value is opposite of 'oldStatus', it's a true success
        //         if (responseData.data.old_status !== responseData.data.new_status) {
        //             //BE API call to get updated details (with new status)
        //             //NOTE: this is wasteful of API calls; also, it requires passing down setDetailedInfo, etc.  ARRGH!  I'm not sure of a better way (other than making a structured clone and setDetailedInfo() with it)
        //             fetch(`http://localhost:3000/api/v1/subscriptions/${subscriptionInfo.id}`)
        //                 .then(response => response.json())
        //                 .then(data => {
        //                     console.log("Incoming subscription details: ", data)
        //                     setDetailedInfo(data)
        //                 })
        //                 .catch(error => {
        //                     console.error("Error: ", error)
        //                 })
        //             //Now change the button text
        //             setCurrentStatus("Status updated!")
        //             setTimeout(() => {
        //                 console.log("Timeout reached!")
        //                 // setSaveButtonMessage("Results already saved")
        //                 toggleStatusDisplay(responseData.data.old_status)
        //             }, 1500)
        //         }
        //     })
        //     .catch(error => {
        //         console.log("Error: ", error)
        //     })
        //After this, do I need to trigger an update to detailedInfo?  (Or at least make another BE API call)

        // }

        // if (detailedInfo.data.status === "cancelled") {
        //     setCurrentStatus("Re-activate")
        // } else if (detailedInfo.data.status === "active") {
        //     setCurrentStatus("Cancel")
        // } else {
        //     setCurrentStatus("[State unknown] Cancel")
        // }
    }

    const toggleStatusDisplay = (oldStatus) => {
        //Need to pass oldStatus (since when async call resolves, the status has been changed...duh)
        if (oldStatus === "cancelled") {
            setCurrentStatus("Re-activate this subscription")
        } else if (oldStatus === "active") {
            setCurrentStatus("Cancel this subscription")
        } else {
            setCurrentStatus("[State unknown]")
        }
    }

    return (
        <button onClick={() => changeStatus(false)}>
            {currentStatus}
        </button>
    )
}

export default StatusButtonContainer