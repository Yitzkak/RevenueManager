import React from "react";

const AddForm = ({ expenses, handleSubmit, handleChange }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
//);

export default AddForm;
