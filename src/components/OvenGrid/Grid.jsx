import Slot from "../OvenSlot/Slot"


export default function Grid(props) {
    let { ovenName, ovenTemp, ovenSlots, ovenCustomer, ovenTime, ovenHidden } = props;
    if (ovenHidden=true) {
        alert(ovenHidden);
        return (
            <></>
        )
    } else {
        return (
            <div ovenWrapper="oven-wrapper">
                <h1 className='oven-name'>{ovenName}</h1>
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
        );
    }
}