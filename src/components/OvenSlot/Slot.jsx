import React, { useState } from "react";
import TimerConfig from "../OvenTimer/TimerConfig";
import TimerBody from "../OvenTimer/TimerBody";
import NewTimer from "../OvenTimer/NewTimer";
import Swal from "sweetalert2";
import TimerInfo from "../OvenTimer/TimerInfo";
import { getOvenDuration } from "../utils";


export default function Slot(props) {
  
  let { ovenTime, ovenNumber } = props;
  const [timer, setTimer] = useState({
    expiryTimestamp: 0,
    isHidden: true,
  });

  const duration = getOvenDuration(ovenNumber)

  

  // Function called when you press '+', generates a new timer
  function createTimer() {
    // read the duration value
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0)
    let durationDiff = (duration-midnight) / 1000;
    const time = new Date();
    time.setSeconds(time.getSeconds() + durationDiff); // 10 minutes timer
    //todo delete after
    
      setTimer(
        {
          isHidden: false,
          expiryTimestamp: time,
        },
      );
    }

  function timeChange(seconds) {
    setTimer(seconds)
  }

  function removeTimer(timer) {
    setTimer({
      isHidden: true,
      timeoutSeconds: 0,
      expiryTimestamp: 0,
      ovenTime: 0,
    })
  }


  return (
    <>
      { timer.isHidden ? 
        <NewTimer
        createTimer={() => createTimer()}
      />
      :
      <>
        <TimerBody
          expiryTimestamp={timer.expiryTimestamp}
          updateTimeoutSeconds={(seconds) => timeChange(timer, seconds)}
        />
        <TimerInfo
        removeTimer={removeTimer}
        />
        </>
      }      
    </>
  );
}
