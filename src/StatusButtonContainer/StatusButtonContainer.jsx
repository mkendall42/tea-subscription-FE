import "./StatusButtonContainer.css"
import { useState, useEffect } from 'react'

function StatusButtonContainer({ detailedInfo }) {
    const [currentStatus, setCurrentStatus] = useState("Cancel")

    //Required to ensure the button always displays text correctly
    useEffect(() => changeStatus(), [detailedInfo])

    //BE API call to change status (cancel, or re-activate)
    const changeStatus = () => {
        //Check what is presently in detailedInfo, then toggle
        console.log("Detailed information: ", detailedInfo)
        console.log("Status: ", detailedInfo.data.status)
        //Add full functionality later
        if (detailedInfo.data.status === "cancelled") {
            setCurrentStatus("Re-activate")
        } else if (detailedInfo.data.status === "active") {
            setCurrentStatus("Cancel")
        } else {
            setCurrentStatus("Um...cancel")
        }
    }

    return (
        <button onClick={() => changeStatus()}>
            {`${currentStatus} that shit!`}
        </button>
    )
}

export default StatusButtonContainer