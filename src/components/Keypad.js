// Code Keypad Component Here
import React from "react";

function Keypad () {
    return(
        <input type="password" onChange={(x=> {return(console.log("Entering password..."))})}/>
    )
}

export default Keypad