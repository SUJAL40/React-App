import { useState } from "react";
import { getTicket, sum } from './helper';
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}) {
    const [ticket, setTicket] = useState(getTicket(n));
    const isWinning = winCondition(ticket);

    let buyTicket=()=>{
        setTicket(getTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
           <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation,you Win!"}</h3>
        </div>
    );
}
