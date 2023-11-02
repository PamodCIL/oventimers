import './App.css';
import "./index.css";

import React, { useEffect, useState } from "react";
import Timer from "./components/OvenTimer/Timer";
import Grid from "./components/OvenGrid/Grid";
import Slot from "./components/OvenSlot/Slot"
import Swal from "sweetalert2";


export function App() {
  // States of the whole page //
  

  return (
    <section>
      <h1>Cleanroom Timers</h1>
      {/* Generate 3 grids, one for each oven */}
      <div className='ovens-wrapper'>
        <Grid ovenNumber={1} />
        <Grid ovenNumber={2} />
        <Grid ovenNumber={3} />
      </div>
    </section>
  );
}

export default App;
