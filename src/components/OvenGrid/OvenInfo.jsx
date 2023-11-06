import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


export default function OvenInfo(props) {
    let { ovenName, ovenTemp, ovenSlots, ovenCustomer, ovenTime, ovenHidden, removeOven } = props;
    return (
      <div className="title-bar">
        <h1 className='oven-name'>{ovenName}</h1>
        <div className='oven-info'>
          <p>Temp: {ovenTemp}</p>
          <p>Slots: {ovenSlots}</p>
          <p>Customer: {ovenCustomer}</p>
          <p>Time: {ovenTime}</p>
        </div>
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