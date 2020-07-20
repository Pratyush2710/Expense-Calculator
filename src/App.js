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
  const [expenses, setExpense] = useState(initialExpense);

  return (
    <>
      <Alert />
      <h1>Expense Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Expenditure :{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
