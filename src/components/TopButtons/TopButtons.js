import React from "react";
import './TopButtons.css';

import Button from "../../ui/Button/Button";

const TopButtons = () => {
    return (
        <div className="TopButtons">
            <Button>
                Clear
            </Button>
            <Button>
                ⌫
            </Button>
            <Button>
                ±
            </Button>
            <Button>
                ÷
            </Button>
        </div>
    );
};

export default TopButtons;