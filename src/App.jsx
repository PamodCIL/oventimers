import './App.css';
import React, { useEffect, useState } from "react";
import Timer from "./components/OvenSlot/Timer";
import ButtonUsage from './components/OvenSlot/Timer';
import Picker from './components/OvenSlot/Picker';


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
    <section>
      <p>tdgfdfsdest</p>
      <ButtonUsage></ButtonUsage>
      <Picker></Picker>
    </section>
  );
}

export default App;
