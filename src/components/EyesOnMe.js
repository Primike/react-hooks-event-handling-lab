// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    return (
        <button onFocus={x=> {return(console.log("Good!"))}} onBlur={x=>{return(console.log("Hey! Eyes on me!"))}}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe;