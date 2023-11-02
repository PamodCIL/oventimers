import Timer from "../OvenTimer/Timer";
import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Slot from "../OvenSlot/Slot"


export default function Grid(props) {
    const { ovenNumber } = props;
    return (
    <section class="grid-container">
        <table class="tg">
        <tbody>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={1} /></td>
                <td class="tg-baqh"><Slot slotNumber={2} /></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={3} /></td>
                <td class="tg-nrix"><Slot slotNumber={4} /></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={5} /></td>
                <td class="tg-baqh"><Slot slotNumber={6} /></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={7} /></td>
                <td class="tg-baqh"><Slot slotNumber={8} /></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={9} /></td>
                <td class="tg-baqh"><Slot slotNumber={10} /></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={11} /></td>
                <td class="tg-baqh"><Slot slotNumber={12} /></td>
            </tr>
        </tbody>
    </table>
    <br></br>
    </section>
);
}