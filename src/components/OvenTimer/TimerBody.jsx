import { useTimer } from "react-timer-hook";
import { useState } from "react";
import TimerButtons from "./TimerButtons.jsx";
import * as utils from "../utils.js";


export default function TimerBody(props) {
    let { expiryTimestamp, isHidden, removeTimer, timerName } = props;

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
        autoStart: true,
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
          isRunning={() => isRunning}
          clockValues={() => clockValues}
          input={() => input}
        />
      </div>
    )
  }
