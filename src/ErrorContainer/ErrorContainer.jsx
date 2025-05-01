import "./ErrorContainer.css"
import { Link } from 'react-router-dom'

function ErrorContainer({ currentError }) {
    //This exclusively exists to cleanly show error and a route back to main / 'reset'
    return (
        <section className="error-box">
            <h2 className="align-left">Unfortunately, an error has been encountered.</h2>
            <p>{currentError !== "" ? (
                {currentError}
            ) : (
                "No errors...but how'd you get here?"
            )}</p>
            <div className="link">
                <Link to='/'>Return to main admin view page</Link>
            </div>
        </section>
    )
}

export default ErrorContainer