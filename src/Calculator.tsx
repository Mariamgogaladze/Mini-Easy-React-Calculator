import { useState } from "react";
import Keypad from "./Keypad";
import Display from "./Display";
import "./App.css";
import icon from "./icons8-math-24.png";
function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");

  function handleButtonClick(id: string) {
    if (id === ".") {
      if (inputValue === "") {
        setInputValue("0" + id);
      } else if (!inputValue.includes(".")) {
        setInputValue(inputValue + id);
      }
    } else {
      setInputValue(inputValue + id);
    }
  }

  function handleDeleteButtonClick() {
    if (inputValue.length > 0) {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    }
  }

  function handleOperationButtonClick(newOperator: string) {
    if (inputValue.length > 0) {
      setPreviousValue(inputValue);
      setInputValue("");
      setOperator(newOperator);
    }
  }

  function handleResetButtonClick() {
    setInputValue("");
  }

  function handleEqualButtonClick() {
    if (previousValue !== "" && inputValue !== "") {
      const num1 = parseFloat(previousValue);
      const num2 = parseFloat(inputValue);
      let result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          result = 0;
          break;
      }

      setInputValue(result.toString());
      setPreviousValue("");
      setOperator("");
    }
  }

  return (
    <div className="calculatordiv">
      <div className="firstdiv">
        <h3>Calc</h3>
        <img src={icon} alt="icon" />
      </div>
      <Display inputValue={inputValue} />
      <Keypad
        handleButtonClick={handleButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
        handleAddButtonClick={() => handleOperationButtonClick("+")}
        handleEqualButtonClick={handleEqualButtonClick}
        handleResetButtonClick={handleResetButtonClick}
        handleSubtractButtonClick={() => handleOperationButtonClick("-")}
        handleMultiplyButtonClick={() => handleOperationButtonClick("*")}
        handleDivideButtonClick={() => handleOperationButtonClick("/")}
      />
    </div>
  );
}

export default Calculator;
