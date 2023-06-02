import "./App.css";

type DisplayProps = {
  inputValue: string;
};

function Display({ inputValue }: DisplayProps) {
  return (
    <div className="displaydiv">
      <input type="text" value={inputValue} />
    </div>
  );
}

export default Display;
