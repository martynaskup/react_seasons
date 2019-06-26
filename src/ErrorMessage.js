import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
    return (
        <div className="err-display">
            <h3>Sorry! We are not able to display the season.
                <br />Here is the reason:
                <br /><em>{props.errorMessage}</em>
            </h3>
        </div>
    )
};

export default ErrorMessage;