import './App.css';
import "./index.css";

import React, { useEffect, useState } from "react";
import Timer from "./components/OvenTimer/Timer";
import Grid from "./components/OvenGrid/Grid";
import Slot from "./components/OvenSlot/Slot"
import Swal from "sweetalert2";


export function App() {
  // States of the whole page //
  const [timerList, setTimerList] = useState(getStorage());

  function getStorage() {
    let timerStorage = localStorage.getItem("timerList");
    if (!timerStorage || timerStorage === []) return [];
    return JSON.parse(timerStorage.toString());
  }

  // Function called when you press '+', generates a new timer
  async function createTimer() {
    await Swal.fire({
      title: "Placeholder",
      input: "text",
      inputValidator: (value) => {
        if (!value) return "Invalid Input";
      },
    }).then((result) => {
      if (!result.value) return;
      setTimerList((timerList) => [
        ...timerList,
        {
          timeoutSeconds: 0,
          id: `${result.value} ${timerList.length}`,
          expiryTimestamp: 0,
        },
      ]);
    });
  }

  return (
    <section>
      <p>Cleanroom Timers</p>
      {/* Generate 3 grids, one for each oven */}
      <Grid ovenNumber={1} createTimer={() => createTimer()}/>
      <Grid ovenNumber={2} createTimer={() => createTimer()}/>
      <Grid ovenNumber={3} createTimer={() => createTimer()}/>
    </section>
  );
}

export default App;
