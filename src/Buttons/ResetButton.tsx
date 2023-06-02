type ResetButtonProps = {
  handleResetButtonClick: () => void;
};
function ResetButton({ handleResetButtonClick }: ResetButtonProps) {
  return (
    <div>
      <button onClick={handleResetButtonClick} className="reset">
        RESET
      </button>
    </div>
  );
}

export default ResetButton;
