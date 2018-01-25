import React from "react";
import './TopButtons.css';

import Button from "../../ui/Button/Button";

const TopButtons = (props) => {
    return (
        <div className="TopButtons">
            <Button onButtonClick={props.onClear}>
                Clear
            </Button>
            <Button onButtonClick={props.onDelete}>
                ⌫
            </Button>
            <Button onButtonClick={props.onPlusMinus}>
                ±
            </Button>
            <Button onButtonClick={props.onDivide}>
                ÷
            </Button>
        </div>
    );
};

export default TopButtons;