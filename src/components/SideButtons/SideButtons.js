import React from "react";
import "./SideButtons.css";

import Button from "../../ui/Button/Button";

const SideButtons = () => {
    return (
        <div className="SideButtons">
            <Button>
                x
            </Button>
            <Button>
                –
            </Button>
            <Button>
                +
            </Button>
            <Button>
                =
            </Button>
        </div>
    );
};

export default SideButtons;