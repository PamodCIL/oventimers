import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import * as utils from "../utils.js";


export default function TimerConfig(props) {
  let { expiryTimestamp, timerName, ovenNumber } = props;
  const {
    seconds,
    minutes,
    hours,
    pause,
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

  // const clockValues = [hours, minutes, seconds];
  const [input, setInput] = useState(utils.getInputStorage(0));

function saveDuration(ovenDuration) {
  utils.setOvenDuration(ovenNumber, ovenDuration)
}

  return (
    <div className="timer-wrapper">
      <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false}
        ampmInClock={false}
        maxTime={new Date().setHours(2)}
        views={["hours", "minutes"]}
        inputFormat="HH:mm"
        mask="__:__"
        label="Cure Time [HH:MM]"
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
    </div>
  );
}


