import React, { useState } from "react";
import headImg from "../head.jpg";
import tailImg from "../tail.jpg";
function Coin() {
    let [heads, setHeads] = useState(0);
    let [tails, setTails] = useState(0);
    let [totalFlip, setTotalFlip] = useState(0);
    let [flag, setFlag] = useState(true);

    function flip() {
        setTotalFlip(++totalFlip);
        let coinRandom = Math.ceil(Math.random() * 2);
        if (coinRandom == 1) {
            setHeads(++heads);
            setFlag(true);
            console.log("head");
        } else {
            setTails(++tails);
            setFlag(false);
            console.log("tails");
        }
    }
    return (
        <div>
            <img src={flag ? headImg : tailImg} alt="coin" style={{ width: "100px" }} />
            <div>
                Total Flips: {totalFlip} || Heads: {heads} || Tails: {tails}
            </div>
            <button className="btn btn-success btn-lg px-4" onClick={flip}>
                Flip
            </button>
        </div>
    );
}

export default Coin;
