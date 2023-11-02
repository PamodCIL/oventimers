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
      {/* Generate 3 grids, one for each oven */}
      <div className='all-ovens-wrapper'>
        <div ovenWrapper="oven-wrapper">
          <h1 className='oven-name'>Oven 1</h1>
          <Grid ovenNumber={1} />
        </div>
        <div ovenWrapper="oven-wrapper">
          <h1 className='oven-name'>Oven 2</h1>
          <Grid ovenNumber={2} />
        </div>
        <div ovenWrapper="oven-wrapper">
          <h1 className='oven-name'>Oven 3</h1>
          <Grid ovenNumber={3} />
        </div>
      </div>
    </section>
  );
}

export default App;
