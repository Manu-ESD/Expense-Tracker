import React, { useState } from "react";
import "./ExpenseEntry.css";

function ExpenseEntry(props) {
  const [enteredValues, setenteredValues] = useState({
    description: "",
    date: new Date(2023, 1, 1),
    amount: 0,
  });

  function entryvalues(event) {
    console.log(enteredValues);
    event.preventDefault();
  }

  function descriptionHandler(event) {
    setenteredValues((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  }

  function amountHandler(event) {
    setenteredValues((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  }

  function dateHandler(event) {
    setenteredValues((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  }
  return (
    <div className="Expense-Entry">
      <form className="Expense-from" onSubmit={entryvalues}>
        <label>Enter Description</label>
        <input type="text" onChange={descriptionHandler}></input>

        <label>Enter Amount</label>
        <input type="number" min="0" onChange={amountHandler}></input>

        <label>Chose Date</label>
        <input type="Date" onChsnge={dateHandler}></input>
        <div className="formbutton">
          <button>Cancel</button>
          <button
            type="submit"
            onClick={() => props.sendingvalues(enteredValues)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseEntry;
