import './App.css';
import React, { useEffect, useState } from "react";


function App() {
  // States of the whole page //
  const [timerList, setTimerList] = useState(getStorage());
  const [InputFilter, setInputFilter] = useState("");

  // Functions
  function getStorage() {
    let timerStorage = localStorage.getItem("timerList");
    if (!timerStorage || timerStorage === []) return [];
    return JSON.parse(timerStorage.toString());
  }

  return (
    <p>test</p>
  );
}

export default App;
