import React from "react";
import './Number.css';

const Number = (props) => {
    return (
        <div className="Number">
            {props.children}
        </div>
    );
};

export default Number;