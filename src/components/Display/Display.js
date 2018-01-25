import React from "react";
import "./Display.css";

const format = require('format-number-with-string');

const Display = (props) => {
    let numberDisplayed = "";
    if (!props.firstNumberActive) {
        numberDisplayed = props.secondNumber;
    } else {
        numberDisplayed = props.firstNumber;
    }
    
    
    return (
        <div className="Display">
            <div className="NumberDisplay">
                {numberDisplayed === "" ? 0 : format(numberDisplayed, '-#,###,###.#')}
            </div>
        </div>
    );
};

export default Display;