import Timer from "../OvenTimer/Timer";
import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Slot from "../OvenSlot/Slot"


export default function Grid(props) {
    const { ovenNumber, createTimer } = props;
    return (
    <section class="grid-container">
        <table class="tg">
        <tbody>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={1} createTimer={() => createTimer()}/></td>
                <td class="tg-baqh"><Slot slotNumber={2} createTimer={() => createTimer()}/></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={3} createTimer={() => createTimer()}/></td>
                <td class="tg-nrix"><Slot slotNumber={4} createTimer={() => createTimer()}/></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={5} createTimer={() => createTimer()}/></td>
                <td class="tg-baqh"><Slot slotNumber={6} createTimer={() => createTimer()}/></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={7} createTimer={() => createTimer()}/></td>
                <td class="tg-baqh"><Slot slotNumber={8} createTimer={() => createTimer()}/></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={9} createTimer={() => createTimer()}/></td>
                <td class="tg-baqh"><Slot slotNumber={10} createTimer={() => createTimer()}/></td>
            </tr>
            <tr>
                <td class="tg-0lax"><Slot slotNumber={11} createTimer={() => createTimer()}/></td>
                <td class="tg-baqh"><Slot slotNumber={12} createTimer={() => createTimer()}/></td>
            </tr>
        </tbody>
    </table>
    <br></br>
    </section>
);
}