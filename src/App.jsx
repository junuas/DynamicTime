import React from "react";
import "./styles.css";

export default function App() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, changeTime] = React.useState(time);

  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }

  setInterval(checkTime, 3000);

  return (
    <div className="App">
      <h1>{currentTime}</h1>
      <button onClick={checkTime}>Get the current time!</button>
    </div>
  );
}
