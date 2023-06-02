type SubtractButtonProps = {
  handleSubtractButtonClick: () => void;
};
function SubtractButton({ handleSubtractButtonClick }: SubtractButtonProps) {
  return (
    <div>
      <button onClick={handleSubtractButtonClick}>-</button>
    </div>
  );
}

export default SubtractButton;
