import React from "react";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  function NumToNameMonth(Num) {
    if (Num === "0") {
      return "Jan";
    } else if (Num === "1") {
      return "Feb";
    } else if (Num === "2") {
      return "Mar";
    } else if (Num === "3") {
      return "Apr";
    } else if (Num === "4") {
      return "May";
    } else if (Num === "5") {
      return "Jun";
    } else if (Num === "6") {
      return "Jul";
    } else if (Num === "7") {
      return "Aug";
    } else if (Num === "8") {
      return "Sep";
    } else if (Num === "9") {
      return "Oct";
    } else if (Num === "10") {
      return "Nov";
    } else {
      return "Dec";
    }
  }

  return (
    <div className="Expense-Items">
      <div className="Date">
        <p>{props.date.getDate().toString()}</p>
        <p className="Month">
          {NumToNameMonth(props.date.getMonth().toString())}
        </p>
        <p>{props.date.getFullYear().toString()}</p>
      </div>

      <div className="Discription">{props.description}</div>

      <div className="Amount">{props.amount + "Rs"}</div>
    </div>
  );
}

export default ExpenseItems;
