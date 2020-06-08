import React from "react";

const AddForm = ({ expenses, handleSubmit, handleChange }) => {
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <select name="description" value={expenses.description} onChange={handleChange}>
          <option value="">select a description or add one below...</option>
          <option value="food">Food</option>
          <option value="fuel">Fuel</option>
          <option value="data">Data</option>
          <option value="gift">Gift</option>
          <option value="shoe">Shoe</option>
          <option value="cloth">Cloth</option>
        </select>
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
          name="amount"
          value={expenses.amount}
          required
          placeholder="Amount"
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
