import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { IconButton } from '@mui/material';


export default function AddTimerBtn(props) {
  const { createTimer } = props;
  return (
    <div class="add-timer-bar">
      <IconButton
        onClick={() => {
          createTimer();
        }}
      >
        <AddAlarmIcon style={{ color: "grey" }} />
      </IconButton>
    </div>
  );
}

