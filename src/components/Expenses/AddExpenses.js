import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import moment from "moment";

const AddExpenses = ({ addExpenses, expenseEditItem }) => {
  const [expenses, setExpenses] = useState(expenseEditItem);

  useEffect(() => {
    setExpenses(expenseEditItem);
  }, [expenseEditItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let todaysDate = moment().format("YYYY-MM-DD");

    //if the date input field is empty use today's date
    expenses.date === "" && (expenses.date = todaysDate);
    addExpenses(expenses);

    // Clear state to clear input fields
    expenses.amount = expenses.description = expenses.date = "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log("This is target name:", e.target.name);
    setExpenses({ ...expenses, [name]: value });
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <AddForm
          expenses={expenses}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </React.Fragment>
  );
}; //);

export default AddExpenses;
