import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import boopSfx from "../sounds/alarm-clock.wav";
import "../styles/App.css";

const App = () => {
  // write your code here
  // const EnterKeyCode = 13;
  const [time, setTime] = useState("");
  const [flag, setFlag] = useState(0);
  const [input, setInput] = useState("");
  const [play] = useSound(boopSfx);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (time === 0) {
      play();
      // alert("Time Elapsed");
    }
  }, [time, flag, play]);

  const handleEnterTime = () => {
    setFlag(1);
    clearInterval(timerID);
    if (isNaN(input)) {
      setTime(0);
      return;
    }
    setTime(parseInt(input));
    return;
  };
  const ticker = () => {
    clearInterval(timerID);
    if (time <= 0) {
      return;
    }
    setTime(time - 1);
  };
  let timerID = setInterval(ticker, 1000);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Enter countdown time:
          <div>
            <input id="timeCount" onChange={handleInput} /> secs
          </div>
        </h1>
        <button id="button" name="start" onClick={handleEnterTime}>
          Start
        </button>
        <div id="current-time">{time}</div>
      </div>
    </div>
  );
};

export default App;
