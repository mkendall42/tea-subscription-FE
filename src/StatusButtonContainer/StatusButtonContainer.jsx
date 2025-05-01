import "./StatusButtonContainer.css"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function StatusButtonContainer({ detailedInfo, setDetailedInfo, setCurrentError }) {
    const [currentStatus, setCurrentStatus] = useState("Cancel")
    const navigateToPage = useNavigate()

    //Required to ensure the button always displays text correctly
    useEffect(() => {
        if (currentStatus !== "Status updated!") {
            toggleStatusDisplay(detailedInfo.data.status)
        }
    }, [detailedInfo])

    //BE API call to change status (cancel, or re-activate)
    const changeStatus = () => {
        const oldStatus = detailedInfo.data.status
        const newStatus = getToggledStatus(oldStatus)
        
        const bodyParams = { "status": newStatus }
        const httpParams = {
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
            if (!result.ok) {
                throw new Error(`${result.status}: failed to retrieve list of subscriptions.`)
            }
    
            //Create a structured clone (deep copy req'd), change 'status', then re-save (otherwise would need to re-design what state var used)
            let newDetailedInfo = structuredClone(detailedInfo)
            newDetailedInfo.data.status = newStatus
            setDetailedInfo(newDetailedInfo)
            
            setCurrentStatus("Status updated!")
            setTimeout(() => {
                console.log("Timeout reached!")
                toggleStatusDisplay(newStatus)
            }, 1500)
        })
        .catch(error => {
            setCurrentError(error)
            navigateToPage('/error')
        })
    }

    const getToggledStatus = (oldStatus) => {
        if (oldStatus === "active") {
            return "cancelled"
        } else if (oldStatus === "cancelled") {
            return "active"
        } else {
            return "Houston, we've had a problem"           //How it was ACTUALLY said during Apollo 13 mission
        }
    }
    
    const toggleStatusDisplay = (oldStatus) => {
        //Need to pass oldStatus (since when async call resolves, the status has been changed)
        if (oldStatus === "cancelled") {
            setCurrentStatus("Re-activate this subscription")
        } else if (oldStatus === "active") {
            setCurrentStatus("Cancel this subscription")
        } else {
            setCurrentStatus("[State unknown]")
        }
    }

    return (
        <button className="status-button" onClick={() => changeStatus(false)}>
            {currentStatus}
        </button>
    )
}

export default StatusButtonContainer