import React from "react";
import "./BottomSection.css";

import NumbersGrid from "./NumbersGrid/NumbersGrid";
import SideButtons from "./SideButtons/SideButtons";

const BottomSection = (props) => {
    return (
        <div className="BottomSection">
            <NumbersGrid onClickNumber={props.onClickNumber} />
            <SideButtons 
                onAdd={props.onAdd}
                onSubstract={props.onSubstract}
                onMultiply={props.onMultiply}
                onResult={props.onResult}
            />
        </div>
    )
}

export default BottomSection;