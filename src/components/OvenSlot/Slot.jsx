import React, { useState, useEffect } from "react";
import Timer from "../OvenTimer/Timer";
import NewTimer from "../OvenTimer/NewTimer";
import TimerButtons from "../OvenTimer/TimerButtons";
import * as utils from "../utils";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material'; 




export default function Slot(props) {
  const { createTimer, changeInputFilter, sortList } = props;

  return (
    <NewTimer createTimer={createTimer} />
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