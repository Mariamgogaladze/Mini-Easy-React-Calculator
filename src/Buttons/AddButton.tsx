type AddButtonProps = {
  handleAddButtonClick: () => void;
};
function AddButton({ handleAddButtonClick }: AddButtonProps) {
  return (
    <div>
      <button onClick={handleAddButtonClick}>+</button>
    </div>
  );
}

export default AddButton;
