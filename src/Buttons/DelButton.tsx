type DelButtonProps = {
  handleDeleteButtonClick: () => void;
};

function DelButton({ handleDeleteButtonClick }: DelButtonProps) {
  return (
    <div>
      <button className="delete" onClick={handleDeleteButtonClick}>
        DEL
      </button>
    </div>
  );
}

export default DelButton;
