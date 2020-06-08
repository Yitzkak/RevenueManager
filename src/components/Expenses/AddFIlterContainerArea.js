import React, { useState, useEffect } from "react";
import AddExpenses from "./AddExpenses";
import FilterExpenses from "./FilterExpenses";


import { Login, List } from "../../Icons";

function AddFilterContainerArea({
  addExpenses,
  expenseEditItem,
  filterOrAddView,
  filterExpenses
}) {
  // filterOrAddView is always incremented in every render and passed in here
  // This is used to always set 'view' to true and always render 'AddExpenses'container
  // This is necessary cuz 'AddExpenses' should be rendered when edit button is clicked
  // If this is not set then FilterExpense persist in view when an edit buutton is clicked
  const [view, setView] = useState(filterOrAddView);

  useEffect(() => {
    setView(true);
  }, [filterOrAddView]);

  // Use this state to implement mouse hover change on icons
  // Icons for switching between query fields and add expenses
  const [iconColor, setIconColor] = useState({
    iconColor1: "#ecd005",
    iconColor2: "#ecd005",
  });

  const iconBar = () => {
    return (
      <div className="add-expenses-icons">
        <ul>
          <li onClick={() => setView(false)}>
            <List
              className="filter-expense-icon"
              width="30px"
              height="30px"
              fill={iconColor.iconColor1}
              onMouseOver={() =>
                setIconColor({ ...iconColor, iconColor1: "#fff" })
              }
              onMouseOut={() =>
                setIconColor({ ...iconColor, iconColor1: "#ecd005" })
              }
            />
          </li>
          <li onClick={() => setView(true)}>
            <Login
              className="add-expense-icon"
              width="30px"
              height="30px"
              fill={iconColor.iconColor2}
              onMouseOver={() =>
                setIconColor({ ...iconColor, iconColor2: "#fff" })
              }
              onMouseOut={() =>
                setIconColor({ ...iconColor, iconColor2: "#ecd005" })
              }
            />
          </li>
        </ul>
        <p></p>
      </div>
    );
  };

  return (
    <div className="controls-container">
      <div>{iconBar()}</div>
      {view ? (
        <div>
          {
            <AddExpenses
              expenseEditItem={expenseEditItem}
              addExpenses={addExpenses}
            />
          }
        </div>
      ) : (
        <FilterExpenses filterExpenses ={filterExpenses} />
      )}
    </div>
  );
}

export default AddFilterContainerArea;
