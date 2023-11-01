import './App.css';
import React, { useEffect, useState } from "react";
import Timer from "./components/OvenTimer/Timer";
import Grid from "./components/OvenGrid/Grid";
import Slot from "./components/OvenSlot/Slot"

function App() {
  // States of the whole page //

  return (
    <section>
      <p>Cleanroom Timers</p>
      {/* Generate 3 grids, one for each oven */}
      <Grid ovenNumber={1} />
      <Grid ovenNumber={1} />
      <Grid ovenNumber={1} />
    </section>
  );
}

export default App;
