import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import NewTimer from "../OvenTimer/NewTimer";
import Swal from "sweetalert2";


export default function OvenInfo(props) {
    let { ovenName, ovenTemp, ovenSlots, ovenCustomer, ovenTime, ovenHidden, removeOven } = props;

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
        <NewTimer createTimer={createTimer} />
        <IconButton
          // style={{ color: "white" }}
          aria-label="delete"
          color="default"
          onClick={() => {
            removeOven();
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }