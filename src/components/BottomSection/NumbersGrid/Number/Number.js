import React from "react";
import './Number.css';

const Number = (props) => {
    return (
        <div
            onClick={() => props.onClickNumber(props.children)}
            className="Number"
        >
            {props.children}
        </div>
    );
};

export default Number;