import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import TimerButtons from "./TimerButtons.jsx";
import TimerBody from "./TimerBody.jsx";
import * as utils from "../utils.js";
import TimerInfo from "./TimerInfo.jsx"


export default function TimerConfig(props) {
  let { expiryTimestamp, isHidden, removeTimer, timerName, ovenNumber } = props;
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
      let time = utils.parseTime(input);
      restart(time);
      pause();
      utils.timerExpired(timerName);
    }
  });

  const clockValues = [hours, minutes, seconds];
  const [input, setInput] = useState(utils.getInputStorage(0));

function saveDuration(ovenDuration) {
  utils.setOvenDuration(ovenNumber, ovenDuration)
}

  return (
    <section className="timer-wrapper">
      <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false}
        ampmInClock={false}
        maxTime={new Date().setHours(2)}
        views={["hours", "minutes"]}
        inputFormat="HH:mm"
        mask="__:__"
        label="HH:MM"
        value={input}
        onChange={(newValue) => {
          saveDuration(newValue);
        }}
        textField={(params) => (
          <TextField
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                let time = utils.parseTime(input);
                restart(time);
              }
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
    </>
      
    </section>
  );
}


