import React from "react";
import './Button.css';

const Button = (props) => {
    return (
        <div 
            className="Button"
            onClick={props.onButtonClick}
        >
            {props.children}
        </div>
    );
};

export default Button;