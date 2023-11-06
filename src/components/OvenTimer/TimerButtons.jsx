import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import * as utils from "../utils";


export default function TimerButtons(props) {
  const { pause, resume, restart, isRunning, clockValues, input } = props;
    // return (
    //   // <div className="buttons">
    //   //   <IconButton
    //   //   onClick={() => {
    //   //     if (!isRunning()) {
    //   //       if (!clockValues().every((e) => Boolean(e))) {
    //   //         let time = utils.parseTime(input());
    //   //         if (!time) return;
    //   //         restart(time);
    //   //       } else {
    //   //         resume();
    //   //       }
    //   //     } else {
    //   //       pause();
    //   //     }
    //   //   }}
    //   // >
    //   // {!isRunning() ? <PlayArrowIcon /> : <PauseIcon />}
    //   // </IconButton>      
    //   // </div>
    // )
  }