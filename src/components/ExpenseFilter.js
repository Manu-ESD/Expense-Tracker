import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  function onselection(event) {
    props.filter(event.target.value);
    console.log(event.target);
  }
  return (
    <div className="Expense-Filter">
      <p>Select Year : </p>
      <select class="form-select" id="year" name="year" onClick={onselection}>
        <option value="">year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
