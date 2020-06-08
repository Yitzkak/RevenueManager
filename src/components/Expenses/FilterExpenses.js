import React, { useState } from "react";
import moment from "moment";

function FilterExpenses({ filterExpenses }) {
  const [searchValue, setSearchValue] = useState({});
  const [formInfo, setFormInfo] = useState("");

  //Used to populate months select field
  let listOfMonths = moment.months();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterExpenses(searchValue);
  };

  return (
    <div className="form-container">
      <div className="info-area"> {formInfo}</div>
      <form onSubmit={handleSubmit}>
        <select
          value={searchValue.searchByDailyWeekly}
          onChange={handleChange}
          name="searchByDailyWeekly"
        >
          <option value="">Select time period...</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>

        {searchValue.searchByDailyWeekly === "daily" && (
          <select
            value={searchValue.searchByMonth}
            onChange={handleChange}
            name="searchByMonth"
          >
            <option value="">Select the month...</option>
            {listOfMonths.map((monthName, index) => {
              return (
                <option value={monthName} key={index}>
                  {monthName}
                </option>
              );
            })}
          </select>
        )}

        <select
          value={searchValue.searchByYear}
          onChange={handleChange}
          name="searchByYear"
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>

        <select
          value={searchValue.searchByCategory}
          onChange={handleChange}
          name="searchByCategory"
        >
          <option value="food">Food</option>
          <option value="fuel">Fuel</option>
          <option value="data">Data</option>
          <option value="clothing">Clothing</option>
          <option value="appliances">Home Appliances</option>
        </select>

        <input type="text" placeholder="Date" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Amount" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default FilterExpenses;
