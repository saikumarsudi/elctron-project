import React from "react";
import { useState } from "react"
import './Watchdog.css';
function Watchdog() {

    const [items, setGender] = useState("Report as an Enhancement");
    function onChangeValue(event) {
        setGender(event.target.value);
        console.log(event.target.value);
    }


    return (
        <div className="watchdog">
            <h1>Watch dog</h1>

            <div className="listOfOptions" onChange={onChangeValue}>
                <div ><header id="heading">Kindly choose an option so we can serve you better</header></div>
                <div ><input id="enchancement" type="radio" value="Report as an Enhancement" name="items" checked={items === "Report as an Enhancement"} /> Report as an Enhancement</div>
                <div ><input id="bug" type="radio" value="Report as a Bug" name="items" checked={items === "Report as a Bug"} /> Report as a Bug</div>
                <div><input id="newidea" type="radio" value="Report as a New idea" name="items" checked={items === "Report as a New idea"} /> Report as a New idea</div>
            </div>
            <div className="navigation">
                <button id="cancel-button">Cancel</button>
                <button id="next-button">Next</button>
            </div>
        </div>
    );
}
export default Watchdog;