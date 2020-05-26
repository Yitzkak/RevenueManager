import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import FilterExpenses from "./FilterExpenses";

const AddExpenses = ({ addExpenses, expenseEditItem }) => {
  const [expenses, setExpenses] = useState(expenseEditItem);

  useEffect(() => {
    setExpenses(expenseEditItem);
  }, [expenseEditItem]);

  /*const [expenses, setExpenses] = useState({
    amount: "",
    description: "",
    date: "",
  });*/

  const [view, setView] = useState(false);

  // Use this state to implement mouse hover change on icons
  // Icons for switching between query fields and add expenses
  const [iconColor, setIconColor] = useState({
    iconColor1: "#ecd005",
    iconColor2: "#ecd005",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();

    //if the date input field is empty use today's date
    expenses.date == "" && (expenses.date = currentDate.toLocaleDateString());
    addExpenses(expenses);

    // Clear state to clear input fields
    expenses.amount = expenses.description = expenses.date = "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenses({ ...expenses, [name]: value });
  };

  return (
    <React.Fragment>
      <div className="form-container">
        {!view ? (
          <AddForm
            expenses={expenses}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <FilterExpenses />
        )}
      </div>
    </React.Fragment>
  );
}; //);

export default AddExpenses;
