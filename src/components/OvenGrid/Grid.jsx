import Slot from "../OvenSlot/Slot"
import OvenInfo from "./OvenInfo";
import Swal from "sweetalert2";

export default function Grid(props) {
    let { ovenName, ovenTemp, ovenSlots, ovenCustomer, ovenTime, ovenHidden, removeOven, ovenNumber } = props;

    if (ovenHidden===true) {
        return (
            <></>
        )
    } else {

        let displayBuffer = [];
        for (let i = 1; i <= (Math.floor(ovenSlots/2)); i++){
            displayBuffer.push(
                <tr>
                    <td class="oven-cell"><Slot ovenName={ovenName} ovenNumber={ovenNumber} slotNumber={i}/></td>
                    <td class="oven-cell"><Slot ovenName={ovenName} ovenNumber={ovenNumber} slotNumber={i+1}/></td>
                </tr>
            );
        }
        return (
            <>
                <OvenInfo
                    ovenName        ={ovenName}
                    ovenTemp        ={ovenTemp}
                    ovenCustomer    ={ovenCustomer}
                    ovenTime        ={ovenTime}
                    removeOven      ={removeOven}
                    ovenNumber      ={ovenNumber}
                />
                <div className="oven-wrapper">
                    <table class="oven-grid">
                        <tbody>
                            {displayBuffer}
                        </tbody>
                    </table>
                </div>   
            </>
        );
    }
}





