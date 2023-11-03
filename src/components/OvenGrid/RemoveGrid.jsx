import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


export default function OvenInfo(props) {
    let { removeOven, ovenName } = props;
    return (
      <div className="title-bar">
        <h1 className='oven-name'>{ovenName}</h1>
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