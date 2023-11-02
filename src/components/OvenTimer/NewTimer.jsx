import AddIcon from '@mui/icons-material/Add';
import Timer from './Timer';
import { useState } from 'react';
import { IconButton } from '@mui/material';


// // This function is the form that opens, for you to put in duration, batch info etc
// export default function NewTimer(props) {
//   const { createTimer } = props;
//   return (
//       <>
//         {/* Duration */}
//         <input type="time" min="00:00" max="02:00" value="00:20" required onchange={submitTime}></input>
//         {/* Label */}
//       </>
//     )
// }

export default function AddTimerBtn(props) {
  const { createTimer } = props;
  return (
    <>
      <IconButton
        onClick={() => {
          createTimer();
        }}
      >
        <AddIcon style={{ color: "white" }} />
      </IconButton>
    </>
  );
}

