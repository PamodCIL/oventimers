import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import TimerButtons from "./TimerButtons.jsx";
import NewTimer from "./NewTimer.jsx"
import * as utils from "../utils.js";


function MyTimer({ props }) {
  let { expiryTimestamp} = props;
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ 
    autoStart: false,
    expiryTimestamp, 
    onExpire: () => {
      alert("Expired Timer") 
    }
  });


  // Actual things that gets returned - should contain everything that generates when a new timer generates
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '50px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}


// One whole timer entity
export default function Timer(props) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <section>
      <MyTimer expiryTimestamp={time} />
    </section>
  )
}