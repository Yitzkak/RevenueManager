import React, { useState } from "react";

const AddExpenses = ({ addExpenses }) => {
  const [expenses, setExpenses] = useState({
    amount: "",
    description: "",
    date: ""
  });

  //console.log(expenses);

  const handleSubmit = e => {
    e.preventDefault();
    const currentDate = new Date();
    console.log(currentDate);
    expenses.date == ""
      ? (expenses.date = currentDate.toLocaleDateString())
      : console.log("2");
    console.log("latest data: ", expenses);
    addExpenses(expenses);
    expenses.amount = expenses.description = expenses.date = "";
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setExpenses({ ...expenses, [name]: value });
  };
  return (
    <div className="controls-container">
      <div className="add-expenses-icons">
        <p></p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="amount"
          value={expenses.amount}
          required
          placeholder="Amount"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={expenses.description}
          required
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          value={expenses.date}
          placeholder="Date"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddExpenses;
