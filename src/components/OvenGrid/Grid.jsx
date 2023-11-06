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
                    <td class="oven-cell"><Slot ovenTime={ovenTime} ovenNumber={ovenNumber} /></td>
                    <td class="oven-cell"><Slot ovenTime={ovenTime} ovenNumber={ovenNumber} /></td>
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
                <div ovenWrapper="oven-wrapper">
                    <section class="grid-container">
                        <table class="oven-grid">
                        <tbody>
                            {displayBuffer}
                        </tbody>
                    </table>
                    </section>
                </div>   
            </>
        );
    }
}





