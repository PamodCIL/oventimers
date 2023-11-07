import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers'
import * as utils from "../utils.js";


export default function TimerConfig(props) {
  let { ovenNumber } = props;
  
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
          onChange={(newValue) => {
            saveDuration(newValue);
          }}          
        />
        </LocalizationProvider>
      </>
    </div>
  );
}


