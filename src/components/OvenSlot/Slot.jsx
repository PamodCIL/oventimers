import React, { useState } from "react";
import TimerBody from "../OvenTimer/TimerBody";
import NewTimer from "../OvenTimer/NewTimer";
import TimerInfo from "../OvenTimer/TimerInfo";
import { getOvenDuration } from "../utils";


export default function Slot(props) {
  
  let { slotNumber, ovenNumber, ovenName } = props;

  const [timer, setTimer] = useState({
    expiryTimestamp: 0,
    isHidden: true,
  });


  function createTimer() {
    const duration = getOvenDuration(ovenNumber)
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0)
    let durationDiff = (duration-midnight) / 1000;
    const time = new Date();
    time.setSeconds(time.getSeconds() + durationDiff); // 10 minutes timer
  
    setTimer(
      {
        isHidden: false,
        expiryTimestamp: time,
      },
    );
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
        <div className="slot-buttons">
          <TimerBody
            expiryTimestamp={timer.expiryTimestamp}
            slotNumber={slotNumber}
            ovenNumber={ovenNumber}
            ovenName={ovenName}
          />
          <TimerInfo
          removeTimer={removeTimer}
          />
        </div>
      }      
    </>
  );
}
