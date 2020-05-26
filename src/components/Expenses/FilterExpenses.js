import React, { useState } from "react";

function FilterExpenses() {
  const [sortby, setSortby] = useState("Daily");

  const handleChange = (event) => {
    event.preventDefault();
    setSortby(event.target.value);
  };
  return (
    <div className="form-container">
      <form action="">
        <select value={sortby} onChange={handleChange}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
        <input type="text" placeholder="Date" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Amount" />
      </form>
    </div>
  );
}

export default FilterExpenses;
