import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import TimerButtons from "./TimerButtons.jsx";
import NewTimer from "./NewTimer.jsx"
import * as utils from "../utils.js";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';



export default function TimerInfo(props) {
  let { removeTimer, timerName } = props;
  return (
    <div className="title-bar">
      <h2>{timerName}</h2>
      <IconButton
        // style={{ color: "white" }}
        aria-label="delete"
        color="default"
        onClick={() => {
          removeTimer();
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
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