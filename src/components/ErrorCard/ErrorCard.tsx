import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "./ErrorCard.css";

function ErrorCard({ errorMessage }: { errorMessage: string }) {
    return (
        <div className="container error-card">
            <div className="error-row">
                <FontAwesomeIcon icon={faCircleQuestion} />
                <h2>Oops!</h2>
                <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
            <div className="inner-container">
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

export default ErrorCard;
