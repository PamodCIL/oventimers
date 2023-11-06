import './App.css';
import "./index.css";
import { IconButton } from '@mui/material';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import Swal from "sweetalert2";
import React, { useState } from "react";

import Grid from "./components/OvenGrid/Grid";

export function App() {

  const [oven1, setOven1] = useState({
    number:         1,
    name:           "null1",
    temp:           null,
    slots:          null,
    customerNumber: null,
    cureTime:       null,
    hidden:         true,
  })

  const [oven2, setOven2] = useState({
    number:         2,
    name:           "null2",
    temp:           null,
    slots:          null,
    customerNumber: null,
    cureTime:       null,
    hidden:         true,
  })

  const [oven3, setOven3] = useState({
    number:         3,
    name:           "null3",
    temp:           null,
    slots:          null,
    customerNumber: null,
    cureTime:       null,
    hidden:         true,
  })


  const ovenList = [oven1, oven2, oven3];

  async function createOven(ovenNumber) {
    const { value: formValues } = await Swal.fire({
      title: 'Enter Oven Info',
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
      // choose which oven to set
      switch(ovenNumber) {
        case 1:
          setOven1(
            {
              number:     1,
              name:           formValues[0],
              temp:           formValues[1],
              slots:          formValues[2],
              customerNumber: formValues[3],
              cureTime:       formValues[4],
              hidden:         false,
            },
          )
          break;
        case 2:
          setOven2(
            {
              number:     2,
              name:           formValues[0],
              temp:           formValues[1],
              slots:          formValues[2],
              customerNumber: formValues[3],
              cureTime:       formValues[4],
              hidden:         false,
            },
          )
          break;
        case 3:
          setOven3(
            {
              number:     3,
              name:           formValues[0],
              temp:           formValues[1],
              slots:          formValues[2],
              customerNumber: formValues[3],
              cureTime:       formValues[4],
              hidden:         false,
            },
          )
          break;
      }
    }
  }

  function removeOven(oven) {
    let number=oven.number
    switch(number) {
      case 1:
        setOven1(
          {
            number:     1,
            name:           null,
            temp:           null,
            slots:          null,
            customerNumber: null,
            cureTime:       null,
            hidden:         true,
          },
        )
        break;
        case 2:
        setOven2(
          {
            number:     2,
            name:           null,
            temp:           null,
            slots:          null,
            customerNumber: null,
            cureTime:       null,
            hidden:         true,
          },
        )
        break;
        case 3:
        setOven3(
          {
            number:     3,
            name:           null,
            temp:           null,
            slots:          null,
            customerNumber: null,
            cureTime:       null,
            hidden:         true,
          },
        )
        break;
    }
  }

  function returnOven(ovenNumber) {
    switch(ovenNumber) {
      case 1:
        return oven1;
      case 2:
        return oven2;
      case 3:
        return oven3;
    }
  }

  let displayBuffer = [];

  for (let ovenKey of ovenList) {
    // alert(returnOven(ovenKey.number).name);
    displayBuffer.push(
      <div className='oven-box'>
        <div class="add-oven">
        <IconButton
          onClick={() => {
            createOven(ovenKey.number);
          }}
        >
        <MicrowaveIcon style={{ color: "grey" }} />
        </IconButton>
        </div>
        <div className='oven-instance'>
            <Grid 
            ovenName={returnOven(ovenKey.number).name} 
            ovenTemp={returnOven(ovenKey.number).temp}
            ovenSlots={returnOven(ovenKey.number).slots}
            ovenCustomer={returnOven(ovenKey.number).customerNumber}
            ovenTime={returnOven(ovenKey.number).cureTime}
            ovenHidden={returnOven(ovenKey.number).hidden}
            removeOven={() => removeOven(returnOven(ovenKey.number))}
          />  
        </div>
      </div>
    );
  }
  return (<>{displayBuffer}</>)
}

export default App;
