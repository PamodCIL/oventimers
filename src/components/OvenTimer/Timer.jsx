import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import TimerButtons from "./TimerButtons.jsx";
import * as utils from "../utils.js";
import TimerInfo from "./TimerInfo.jsx"


export default function Timer(props) {
  let { expiryTimestamp, isHidden, removeTimer, timerName } = props;
  // alert("in timer" + expiryTimestamp)
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
      utils.playAudio(timerName);
    }
  });

  const clockValues = [hours, minutes, seconds];
  const [input, setInput] = useState(utils.getInputStorage(0));

  if (isHidden) return <></>;

  function TimerBody() {
    return (
      <div className="timer-buttons">
        <div className="actual-timer">
        {clockValues.map((item, index) => (
            <>
              <div>{item < 10 ? `0${item}` : item}</div>
              {index === clockValues.length - 1 ? "" : ":"}
            </>
          ))}
          </div>
          <TimerButtons
          pause={() => pause()}
          resume={() => resume()}
          restart={(time) => restart(time)}
          isRunning={() => isRunning}
          clockValues={() => clockValues}
          input={() => input}
        />
      </div>
    )
  }


  return (
    <section className="timer-wrapper">
      <TimerInfo 
      removeTimer={removeTimer}
      timerName={timerName}
      />
      {isRunning ? 
        <TimerBody />
      :  
      <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false}
        ampmInClock={false}
        maxTime={new Date().setHours(2)}
        views={["hours", "minutes"]}
        inputFormat="HH:mm"
        mask="__:__"
        label="Edit Duration"
        value={input}
        onChange={(newValue) => {
          setInput(newValue);
        }}
        textField={(params) => (
          <TextField
            // style={{ color: "white" }}
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
    <TimerButtons
          pause={() => pause()}
          resume={() => resume()}
          restart={(time) => restart(time)}
          isRunning={() => isRunning}
          clockValues={() => clockValues}
          input={() => input}
        />
    </>
      }
    </section>
  );
}


