type MultiplyButtonProps = {
  handleMultiplyButtonClick: () => void;
};
function MultiplyButton({ handleMultiplyButtonClick }: MultiplyButtonProps) {
  return (
    <div>
      <button onClick={handleMultiplyButtonClick}>*</button>
    </div>
  );
}

export default MultiplyButton;
