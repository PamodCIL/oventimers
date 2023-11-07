import DeleteIcon from '@mui/icons-material/Delete';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import TimerConfig from '../OvenTimer/TimerConfig';
import { ThumbUp } from '@mui/icons-material';


export default function OvenInfo(props) {
    let { ovenName, ovenTemp, ovenSlots, ovenCustomer, ovenTime, ovenHidden, ovenNumber, removeOven } = props;

    return (
      <div className="title-bar">
        <h1 className='oven-name'>{ovenName}</h1>
        <div className='oven-info'>
          <p>Temperature: {ovenTemp}°C</p>
          <p>Customer: {ovenCustomer}</p>
        </div>
          <TimerConfig
          ovenNumber={ovenNumber}
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