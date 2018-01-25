import React from "react";
import "./SideButtons.css";

import Button from "../../../ui/Button/Button";

const SideButtons = (props) => {
    return (
        <div className="SideButtons">
            <Button onButtonClick={props.onMultiply}>
                x
            </Button>
            <Button onButtonClick={props.onSubstract}>
                –
            </Button>
            <Button onButtonClick={props.onAdd}>
                +
            </Button>
            <Button onButtonClick={props.onResult}>
                =
            </Button>
        </div>
    );
};

export default SideButtons;