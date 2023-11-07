import Swal from "sweetalert2";
import audioURL from "../media/Leapfrog.ogg";


export function timerExpired(slotNumber, ovenNumber, ovenName) {
    Swal.close();
    let audio = new Audio(audioURL);
    audio.loop = true;
    audio.play();
    Swal.fire({ title: `Oven ${ovenNumber}: ${ovenName} \nSlot ${slotNumber}\nFinished`, icon: "warning" }).then(() => {
      audio.loop = false;
      audio.pause();
    });
    // change the expired slot to red

  }


/**
 * @param {Date} input - current value of TimePicker Component
 * @param {boolean} onlySeconds - if true, parseTime return time in seconds
 * @returns {Date|number}
 */


export function parseTime(input, onlySeconds) {
    if (!input || input === null) return getMidNight();
    let time = new Date();
    let durationSeconds =
      input.getHours() * 60 ** 2 + input.getMinutes() * 60 + input.getSeconds();
    if (onlySeconds) return durationSeconds;
    // if the timer is set to 00:00:00
    if (!durationSeconds) return null;
    time.setSeconds(time.getSeconds() + durationSeconds);
    return time;
  }


function getMidNight() {
    // workaround to get 00:00:00 at timer's creation
    const time = new Date();
    time.setHours(0, 0, 0, 0);
    return time;
}


export function getInputStorage(ovenNumber) {
    let inputStorage = localStorage.getItem(ovenNumber);
    if (inputStorage === "null" || !inputStorage) {
        return getMidNight();
    }
    return new Date(JSON.parse(inputStorage.toString()));
}


export function setOvenDuration(ovenNumber, ovenDuration) {
  let storageString = ("Oven"+ovenNumber)
  sessionStorage.setItem(storageString, ovenDuration.toJSON());
}


export function getOvenDuration(ovenNumber) {
  let storageString = ("Oven"+ovenNumber)
  let ovenDuration = sessionStorage.getItem(storageString)
  let duration = new Date(ovenDuration)
  return duration  
}