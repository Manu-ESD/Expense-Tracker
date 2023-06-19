import React from "react";

function Emodule(props){
    return(
        <div className="Emodule">
            <div class="Emodbutton">
            <button>{props.label}</button>
            </div>
            <div class="EmodLabel">
            <p>Spent</p>
            <p>{props.spent}</p>
            </div>
        </div>
    );

}

export default Emodule;