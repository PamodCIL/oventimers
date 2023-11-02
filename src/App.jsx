import './App.css';
import "./index.css";
import { IconButton } from '@mui/material';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import Swal from "sweetalert2";
import React, { useState } from "react";



import Grid from "./components/OvenGrid/Grid";


export function App() {

  const [oven, setOven] = useState({
    number:         null,
    name:           null,
    temp:           null,
    slots:          null,
    customerNumber: null,
    cureTime:       null,
    isHidden:       true,
  })

  const [ovenList, setOvenList] = useState([])

  async function createOven() {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input">Name</input>' +
        '<input id="swal-input2" class="swal2-input">Temperature</input>' +
        '<input id="swal-input3" class="swal2-input">Slots</input>' +
        '<input id="swal-input4" class="swal2-input">Customer</input>' +
        '<input id="swal-input5" class="swal2-input">Time</input>',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value,
          document.getElementById('swal-input5').value,
        ]
      }
    })
    
    if (formValues) {
      setOven(
        {
          name:           formValues[0],
          temp:           formValues[1],
          slots:          formValues[2],
          customerNumber: formValues[3],
          cureTime:       formValues[4],
          isHidden:       false,
        },
      )
    }
  }

  alert(oven.isHidden)

  return (
    <section>
      <div class="add-oven">
      <IconButton
        onClick={() => {
          createOven();
        }}
      >
      <MicrowaveIcon style={{ color: "grey" }} />
      </IconButton>
      </div>
      <div className='all-ovens-wrapper'>
          <Grid 
          ovenName={oven.name} 
          ovenTemp={oven.temp}
          ovenSlots={oven.slots}
          ovenCustomer={oven.customerNumber}
          ovenTime={oven.cureTime}
          ovenHidden={oven.isHidden}
        />  
      </div>
    </section>
  );
}

export default App;
