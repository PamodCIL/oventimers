import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import * as utils from "../utils.js";
import { useState } from 'react';


export default function TimerConfig(props) {
  let { ovenNumber } = props;


  const [configHidden, setConfigHidden] = useState(false);

  
  function saveDuration(ovenDuration) {
    utils.setOvenDuration(ovenNumber, ovenDuration)
  }

  return (
    <div className="timer-wrapper">
      { configHidden ? 
        <></>
      :
      <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false}
        ampmInClock={false}
        maxTime={new Date().setHours(2)}
        views={["hours", "minutes"]}
        closeOnSelect={false}
        inputFormat="HH:mm"
        mask="__:__"
        label="Cure Time [HH:MM]"
        onAccept={(newValue) => {
          saveDuration(newValue);
        }}
        onClose={() => { setConfigHidden(true);}
        }          
      />
      </LocalizationProvider>
    </>
      }
      
    </div>
  );
}


