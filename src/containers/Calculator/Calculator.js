import React, { Component } from 'react';
import './Calculator.css';

import Display from "../../components/Display/Display";
import TopButtons from "../../components/TopButtons/TopButtons";
import SideButtons from "../../components/SideButtons/SideButtons";
import NumbersGrid from "../../components/NumbersGrid/NumbersGrid";

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Display />
        <TopButtons />
        <div className="BottomSection">
          <NumbersGrid />
          <SideButtons />
        </div>
      </div>
    );
  }
}

export default Calculator;

