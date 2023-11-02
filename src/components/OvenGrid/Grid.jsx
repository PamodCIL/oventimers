import React, { useState, useEffect } from "react";
import Slot from "../OvenSlot/Slot"


export default function Grid(props) {
    const { ovenNumber } = props;
    return (
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
    <br></br>
    </section>
);
}