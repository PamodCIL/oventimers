import React, { useState, useEffect } from "react";
import Timer from "../OvenTimer/Timer";
import NewTimer from "../OvenTimer/NewTimer";
import TimerButtons from "../OvenTimer/TimerButtons";
import * as utils from "../utils";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material'; 
import Swal from "sweetalert2";


export default function Slot(props) {
  const [timer, setTimer] = useState({
    name:"null",
    timeoutSeconds: 0,
    expiryTimestamp: 0,
    isHidden: true,
  });

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
      setTimer(
        {
          name: result.value,
          isHidden: false,
          timeoutSeconds: 0,
          expiryTimestamp: 0,
        },
      );
    });
  }

  function timeChange(seconds) {
    setTimer(seconds)
  }

  function removeTimer(timer) {
    setTimer({
      isHidden: true,
      timeoutSeconds: 0,
      expiryTimestamp: 0,
    })
  }

  return (
    <>
    { timer.isHidden ?     
      <NewTimer createTimer={createTimer} />
    :  
      <Timer
        timerName={timer.name}
        isHidden={timer.isHidden}
        expiryTimestamp={timer.expiryTimestamp}
        updateTimeoutSeconds={(seconds) => timeChange(timer, seconds)}
        removeTimer={() => removeTimer(timer)}
      />
    }
    </>
  );
}


// export default function MyCheckbox() {
//     const [timer, setLiked] = useState(false);
  
//     function handleChange(e) {
//       setLiked(e.target.checked);
//     }
  
//     return (
//       <>
//         <label>
//           <input
//             type="checkbox"
//             checked={timer}
//             onChange={handleChange}
//           />
//         </label>
//         {timer && ( <NewTimer/> )}
//         {timer && ( <TimerButtons/> )}
//       </>
//     );
//   }