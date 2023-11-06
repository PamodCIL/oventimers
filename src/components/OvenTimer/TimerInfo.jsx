import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import { IconButton } from '@mui/material';


export default function TimerInfo(props) {
  let { removeTimer } = props;
  return (
    <div>
      <IconButton
        aria-label="delete"
        color="default"
        onClick={() => {
          removeTimer();
        }}
      >
        <AlarmOffIcon />
      </IconButton>
    </div>
  );
}


