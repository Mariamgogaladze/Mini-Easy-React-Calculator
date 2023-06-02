type EqualButtonProps = {
  handleEqualButtonClick: () => void;
};
function EqualButton({ handleEqualButtonClick }: EqualButtonProps) {
  return (
    <div>
      <button onClick={handleEqualButtonClick} className="equal">
        =
      </button>
    </div>
  );
}

export default EqualButton;
