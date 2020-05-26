import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";

// The next step is to implement the handlesubmit function
// When the add button is clicked

function EditContainer({ expenseEditItem }) {
  const [expenses, setExpenses] = useState(expenseEditItem);

  useEffect(() => {
    setExpenses(expenseEditItem);
  }, [expenseEditItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();

    //if the date input field is empty use today's date
    expenses.date == "" && (expenses.date = currentDate.toLocaleDateString());
    //addExpenses(expenses);

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
        <AddForm
          expenses={expenses}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </React.Fragment>
  );
}

export default EditContainer;
