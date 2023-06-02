type NumberButtonProps = {
  handleButtonClick: (id: string) => void;
  handleDivideButtonClick: () => void;
};
function NumberButton({
  handleButtonClick,
  handleDivideButtonClick,
}: NumberButtonProps) {
  return (
    <div className="numberdiv">
      <div className="triplediv">
        <button id="7" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button id="8" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button id="9" onClick={() => handleButtonClick("9")}>
          9
        </button>
      </div>
      <div className="triplediv">
        <button id="4" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button id="5" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button id="6" onClick={() => handleButtonClick("6")}>
          6
        </button>
      </div>
      <div className="triplediv">
        <button id="1" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button id="2" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button id="3" onClick={() => handleButtonClick("3")}>
          3
        </button>
      </div>
      <div className="triplediv">
        <button id="0" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button id="." onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button onClick={handleDivideButtonClick}>/</button>
      </div>
    </div>
  );
}

export default NumberButton;
