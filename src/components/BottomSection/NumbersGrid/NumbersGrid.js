import React from "react";
import "./NumbersGrid.css";

import Number from "./Number/Number";

const NumbersGrid = (props) => {
    return (
        <div className="NumbersGrid">
            <div className="NumbersRow">
                <Number onClickNumber={props.onClickNumber}>7</Number>
                <Number onClickNumber={props.onClickNumber}>8</Number>
                <Number onClickNumber={props.onClickNumber}>9</Number>
            </div>
            <div className="NumbersRow">
                <Number onClickNumber={props.onClickNumber}>4</Number>
                <Number onClickNumber={props.onClickNumber}>5</Number>
                <Number onClickNumber={props.onClickNumber}>6</Number>
            </div>
            <div className="NumbersRow">
                <Number onClickNumber={props.onClickNumber}>1</Number>
                <Number onClickNumber={props.onClickNumber}>2</Number>
                <Number onClickNumber={props.onClickNumber}>3</Number>
            </div>
            <div className="NumbersRow">
                <Number  onClickNumber={props.onClickNumber}>0</Number>
            </div>
        </div>
    );
};

export default NumbersGrid;
