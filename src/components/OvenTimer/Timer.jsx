import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import TimerButtons from "./TimerButtons.jsx";
import NewTimer from "./NewTimer.jsx"
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
      alert("Expired Timer") 
    }
  });

  const clockValues = [hours, minutes, seconds];
  const [input, setInput] = useState(utils.getInputStorage(0));


  // Actual things that gets returned - should contain everything that generates when a new timer generates
 

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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          ampm={false}
          ampmInClock={false}
          views={["hours", "minutes", "seconds"]}
          inputFormat="HH:mm:ss"
          mask="__:__:__"
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
      <TimerBody />
    </section>
  );
}


// // One whole timer entity
// export default function Timer(props) {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
//   return (
//     <section>
//       <MyTimer expiryTimestamp={time} />
//     </section>
//   )
// }