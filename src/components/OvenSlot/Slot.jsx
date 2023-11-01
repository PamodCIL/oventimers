import React, { useState, useEffect } from "react";
import Timer from "../OvenTimer/Timer";
import NewTimer from "../OvenTimer/NewTimer";
import * as utils from "../utils";
import AddIcon from '@mui/icons-material/Add';



// export default function Slot () {
//     const [timer, setTimer] = useState(false);
//     function createTimer() {
//         setTimer(true);
//     }
//     return (
//         <>
//         <AddIcon onClick={createTimer}/>
//         <p>You {timer ? 'pressed' : 'did not press'} this.</p>

//         </>
//     )
// }

// function createTimer() {
//     setTimer(true)
// }

export default function MyCheckbox() {
    const [timer, setLiked] = useState(false);
  
    function handleChange(e) {
      setLiked(e.target.checked);
    }
  
    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={timer}
            onChange={handleChange}
          />
        </label>
        {timer && ( <NewTimer/> )}
      </>
    );
  }