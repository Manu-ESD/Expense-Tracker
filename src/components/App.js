import React, { useState } from "react";
import Login from "./Login";
import Expense from "./Expense";
import ExpenseItems from "./ExpenseItems";
import ExpenseEntry from "./ExpenseEntry";
import ExpenseGraph from "./ExpenseGraph";
import ExpenseFilter from "./ExpenseFilter";

var valuesarray = [
  {
    id: 0,
    description: "Books",
    amount: 123,
    date: new Date(2023, 1, 2),
  },
  {
    id: 1,
    description: "Movie",
    amount: 123,
    date: new Date(2021, 1, 2),
  },
];

function App() {
  const [isloggedin, setisloggedin] = useState(false);
  const [valuedatabase, setValueBase] = useState(valuesarray);
  const [EfilterYear, setEfilterYear] = useState("2021");
  const [filteredarray, setFilteredArray] = useState([]);

  function recievedvalues(ExpenseValue) {
    setValueBase([
      ...valuedatabase,
      {
        id: Math.random(),
        description: ExpenseValue.description,
        amount: ExpenseValue.amount,
        date: ExpenseValue.date,
      },
    ]);
  }

  function pageTwo(creds) {
    if (
      creds.username === "g.v.manohar3@gmail.com" &&
      creds.password === "Test@12345"
    ) {
      setisloggedin(true);
      console.log("correct credentialas");
    } else {
      setisloggedin(false);
      console.log("Incorrect credentialas");
    }
  }

  function setback() {
    setisloggedin(false);
  }

  function filtervalue(filteredyear) {
    setEfilterYear(filteredyear);
  }

  return isloggedin ? (
    <div>
      <Expense Lback={setback} totalspent="12345.00" />

      <ExpenseEntry sendingvalues={recievedvalues}></ExpenseEntry>

      {/* <ExpenseGraph></ExpenseGraph> */}

      <ExpenseFilter filter={filtervalue} />

      <div className="ExpenseModule">
        {valuedatabase
          .filter(
            (items) => items.date.getFullYear().toString() === EfilterYear
          )
          .map((items) => (
            <ExpenseItems
              key={items.id}
              description={items.description}
              amount={items.amount}
              date={items.date}
            />
          ))}
      </div>
    </div>
  ) : (
    <Login page2={pageTwo} />
  );
}

export default App;
