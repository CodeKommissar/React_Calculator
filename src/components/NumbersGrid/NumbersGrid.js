import React from "react";
import "./NumbersGrid.css";

import Number from "../../ui/Number/Number";

const NumbersGrid = () => {
    return (
        <div className="NumbersGrid">
            <div className="NumbersRow">
                <Number>7</Number>
                <Number>8</Number>
                <Number>9</Number>
            </div>
            <div className="NumbersRow">
                <Number>4</Number>
                <Number>5</Number>
                <Number>6</Number>
            </div>
            <div className="NumbersRow">
                <Number>1</Number>
                <Number>2</Number>
                <Number>3</Number>
            </div>
            <div className="NumbersRow">
                <Number>0</Number>
            </div>
        </div>
    );
};

export default NumbersGrid;
