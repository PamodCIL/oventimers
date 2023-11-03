import Slot from "../OvenSlot/Slot"
import OvenInfo from "./RemoveGrid";

export default function Grid(props) {
    let { ovenName, ovenTemp, ovenSlots, ovenCustomer, ovenTime, ovenHidden, removeOven } = props;

    if (ovenHidden==true) {
        return (
            <></>
        )
    } else {
        return (
            <>
                <OvenInfo
                    ovenName={ovenName}
                    removeOven={removeOven}
                />
                <div ovenWrapper="oven-wrapper">
                    <section class="grid-container">
                        <table class="oven-grid">
                        <tbody>
                            <tr>
                                <td class="oven-cell"><Slot slotNumber={1} /></td>
                                <td class="oven-cell"><Slot slotNumber={2} /></td>
                            </tr>
                            <tr>
                                <td class="oven-cell"><Slot slotNumber={3} /></td>
                                <td class="oven-cell"><Slot slotNumber={4} /></td>
                            </tr>
                            <tr>
                                <td class="oven-cell"><Slot slotNumber={5} /></td>
                                <td class="oven-cell"><Slot slotNumber={6} /></td>
                            </tr>
                            <tr>
                                <td class="oven-cell"><Slot slotNumber={7} /></td>
                                <td class="oven-cell"><Slot slotNumber={8} /></td>
                            </tr>
                            <tr>
                                <td class="oven-cell"><Slot slotNumber={9} /></td>
                                <td class="oven-cell"><Slot slotNumber={10} /></td>
                            </tr>
                            <tr>
                                <td class="oven-cell"><Slot slotNumber={11} /></td>
                                <td class="oven-cell"><Slot slotNumber={12} /></td>
                            </tr>
                        </tbody>
                    </table>
                    </section>
                </div>   
            </>
        );
    }
}





