import React from "react";
import "./App.css";
import AddButton from "./Buttons/AddButton";
import EqualButton from "./Buttons/EqualButton";
import MultiplyButton from "./Buttons/MultiplyButton";
import NumberButton from "./Buttons/NumberButton";
import ResetButton from "./Buttons/ResetButton";
import SubtractButton from "./Buttons/SubtractButton";
import DelButton from "./Buttons/DelButton";
type NumberButtonProps = {
  handleButtonClick: (id: string) => void;
  handleDeleteButtonClick: () => void;
  handleAddButtonClick: () => void;
  handleEqualButtonClick: () => void;
  handleResetButtonClick: () => void;
  handleSubtractButtonClick: () => void;
  handleMultiplyButtonClick: () => void;
  handleDivideButtonClick: () => void;
};
function Keypad({
  handleButtonClick,
  handleDeleteButtonClick,
  handleAddButtonClick,
  handleEqualButtonClick,
  handleResetButtonClick,
  handleSubtractButtonClick,
  handleMultiplyButtonClick,
  handleDivideButtonClick,
}: NumberButtonProps) {
  return (
    <div className="keypaddiv">
      <div className="mari">
        <NumberButton
          handleButtonClick={handleButtonClick}
          handleDivideButtonClick={handleDivideButtonClick}
        />
        <div className="otherkey">
          <DelButton handleDeleteButtonClick={handleDeleteButtonClick} />
          <AddButton handleAddButtonClick={handleAddButtonClick} />
          <SubtractButton
            handleSubtractButtonClick={handleSubtractButtonClick}
          />
          <MultiplyButton
            handleMultiplyButtonClick={handleMultiplyButtonClick}
          />
        </div>
      </div>
      <div className="lastkeys">
        <ResetButton handleResetButtonClick={handleResetButtonClick} />
        <EqualButton handleEqualButtonClick={handleEqualButtonClick} />
      </div>
    </div>
  );
}

export default Keypad;
