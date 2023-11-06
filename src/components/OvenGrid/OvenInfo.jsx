import DeleteIcon from '@mui/icons-material/Delete';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import TimerConfig from '../OvenTimer/TimerConfig';
import { ThumbUp } from '@mui/icons-material';


export default function OvenInfo(props) {
    let { ovenName, ovenTemp, ovenSlots, ovenCustomer, ovenTime, ovenHidden, ovenNumber, removeOven } = props;

    const [timer, setTimer] = useState({
      name:"null",
      timeoutSeconds: 0,
      expiryTimestamp: 0,
      isHidden: true,
    });

    function timeChange(seconds) {
      setTimer(seconds)
    }


    return (
      <div className="title-bar">
        <h1 className='oven-name'>{ovenName}</h1>
        <div className='oven-info'>
          <p>Temp: {ovenTemp}</p>
          <p>Customer: {ovenCustomer}</p>
        </div>
        <TimerConfig
          expiryTimestamp={timer.expiryTimestamp}
          ovenNumber={ovenNumber}
          updateTimeoutSeconds={(seconds) => timeChange(timer, seconds)}
        />
        <IconButton
          aria-label="delete"
          color="default"
          onClick={() => {
            removeOven();
          }}
        >
          <CancelPresentationIcon />
        </IconButton>
      </div>
    );
  }