import React from "react";
import Emodule from "./Emodule";
import backlogo from "../assets/back-arrow.png";

function Expense(props) {
  function Loginback() {
    props.Lback();
  }

  return (
    <div className="Expense">
      <div id="Esummary">
        <button className="Eback" onClick={Loginback}>
          Back
        </button>
        <h1 className="Ehead">Expense Summary</h1>
      </div>
    </div>
  );
}

export default Expense;
