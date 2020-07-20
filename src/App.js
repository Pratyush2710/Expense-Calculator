import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

const initialExpense = [
  { id: uuidv4(), charge: "House Rent", amount: 1600 },
  { id: uuidv4(), charge: "Vehicle", amount: 1000 },
  { id: uuidv4(), charge: "Medical", amount: 1200 },
];

function App() {
  //        STATE VALUES
  //  all expense, add expense
  const [expenses, setExpense] = useState(initialExpense);
  //  single expense
  const [charge, setCharge] = useState("");
  //  single amount
  const [amount, setAmount] = useState("");
  //      FUNCTIONS
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpense([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
    } else {
      // handlesalert
    }
    console.log(charge, amount);
  };
  return (
    <>
      <Alert />
      <h1>Expense Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Expenditure :{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
