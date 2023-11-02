import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


export default function TimerInfo(props) {
  let { removeTimer, timerName } = props;
  return (
    <div className="title-bar">
      <h3>{timerName}</h3>
      <IconButton
        // style={{ color: "white" }}
        aria-label="delete"
        color="default"
        onClick={() => {
          removeTimer();
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}


