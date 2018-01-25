import React, { Component } from 'react';
import './Calculator.css';

import Display from "../../components/Display/Display";
import TopButtons from "../../components/TopButtons/TopButtons";
import BottomSection from "../../components/BottomSection/BottomSection";

class Calculator extends Component {
  state = {
    firstNumber: "",
    secondNumber: "",
    firstNumberActive: true,
    mathOperator: null
  }

  handleClickNumber = (clickedNumber) => {
    this.setState((prevState) => {
      if (prevState.firstNumberActive) {
        return {
          firstNumber: prevState.firstNumber.concat(clickedNumber)
        };
      } else {
        return {
          secondNumber: prevState.secondNumber.concat(clickedNumber)
        };
      }
    });
  }

  handleClear = () => {
    this.setState({
      firstNumber: "",
      secondNumber: "",
      firstNumberActive: true,
      mathOperator: null
    })
  }

  handleDelete = () => {
    this.setState((prevState) => {
      if (prevState.firstNumberActive) {
        return {
          firstNumber: prevState.firstNumber.slice(0, -1)
        };
      } else {
        return {
          secondNumber: prevState.secondNumber.slice(0, -1)
        };
      }
    });
  }

  handlePlusMinus = () => {
    this.setState((prevState) => {
      if (prevState.firstNumberActive) {
        if (prevState.firstNumber.charAt(0) === "-") {
          return {
            firstNumber: prevState.firstNumber.substr(1)
          };
        } else {
          return {
            firstNumber: "-".concat(prevState.firstNumber)
          };
        }
      } else {
        if (prevState.secondNumber.charAt(0) === "-") {
          return {
            secondNumber: prevState.secondNumber.substr(1)
          };
        } else {
          return {
            secondNumber: "-".concat(prevState.secondNumber)
          };
        }
      }
    });
  }

  handleAdd = () => {
    this.setState({
      firstNumberActive: false,
      mathOperator: " + "
    })
  }

  handleSubstract = () => {
    this.setState({
      firstNumberActive: false,
      mathOperator: " - "
    })
  }

  handleMultiply = () => {
    this.setState({
      firstNumberActive: false,
      mathOperator: " * "
    })
  }

  handleDivide = () => {
    this.setState({
      firstNumberActive: false,
      mathOperator: " / "
    })
  }

  handleResult = () => {
    this.setState((prevState) => {
      const { firstNumber, secondNumber, mathOperator } = prevState;
      const instruction = firstNumber + mathOperator + secondNumber;
      const result = String(eval(instruction).toFixed(1));

      return {
        firstNumber: result,
        firstNumberActive: true,
        secondNumber: ""
      }
    })
  }

  render() {
    return (
      <div className="Calculator">
        <Display 
          firstNumber={this.state.firstNumber}
          secondNumber={this.state.secondNumber}
          firstNumberActive={this.state.firstNumberActive}
          result={this.state.result}
        />
        <TopButtons 
          onClear={this.handleClear}
          onDelete={this.handleDelete}
          onPlusMinus={this.handlePlusMinus}
          onDivide={this.handleDivide}
        />
        <BottomSection 
          onClickNumber={this.handleClickNumber}
          onAdd={this.handleAdd}
          onSubstract={this.handleSubstract}
          onMultiply={this.handleMultiply}
          onResult={this.handleResult}
        />
      </div>
    );
  }
}

export default Calculator;

// TODO
// Fix plus minus button (only works on first number)