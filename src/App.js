import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Really ? ",
  " NO ?? ",
  "you crazy ?? ",
  " you don't care ??",
  " I don't want you anymore",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 10;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears hugging"
            src="https://gifdb.com/images/high/milk-mocha-love-you-8xejbmeaoy7or8vf.gif"
          />
          <div className="text">Youpiiii!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears trying to escape"
            src="https://gifdb.com/images/high/cartoon-bear-love-you-jkyqq3qflt5ydpwn.gif"
          />

          <div> Will you be my valentin ? </div>
          <div>
            <button
              className="Yesbutton"
              style={{
                fontSize: yesButtonSize + 15,
                fontWeight: "bold",
                color: "white",
                backgroundColor: "green",
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="NoButton"
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "red",
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;