import "./StatusButtonContainer.css"
import { useState } from 'react'

function StatusButtonContainer({ detailedInfo }) {
    const [currentStatus, setCurrentStatus] = useState("Cancel")

    //BE API call to change status (cancel, or re-activate)
    const changeStatus = () => {
        //Check what is presently in detailedInfo, then toggle
        //Add full functionality later
        if (currentStatus === "Cancel") {
            setCurrentStatus("Re-activate")
        } else {
            setCurrentStatus("Cancel")
        }
    }

    return (
        <button onClick={() => changeStatus()}>
            {`${currentStatus} that shit!`}
        </button>
    )
}

export default StatusButtonContainer