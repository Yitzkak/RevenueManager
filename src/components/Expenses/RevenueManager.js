import React, { useRef } from "react";
import AddExpenses from "./AddExpenses";
import DisplayExpenses from "./DisplayExpenses";
import AddEditContainerArea from "./AddEditContainerArea";

import { v4 as uuidv4 } from "uuid";
import { Login, List } from "./../../Icons";

import "./style.scss";

//const RevenueManager = () => {
class RevenueManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, date: "13/04/2020", description: "Food", amount: "2000" },
        { id: 2, date: "13/04/2020", description: "Cloth", amount: "1000" },
        { id: 3, date: "13/04/2020", description: "Bench", amount: "20000" },
        { id: 4, date: "13/04/2020", description: "Phone", amount: "25000" },
      ],
      expenseEditItem: {
        amount: "",
        description: "",
        date: "",
        isInEditMode: false,
      },
      filterOrAddView: 1,
    };
  }

  //Add Expenses
  addExpenses = (expenses) => {
    let newExpenses = [...this.state.expenses, { ...expenses, id: uuidv4() }];
    this.setState({ expenses: newExpenses });
  };

  // Delete Expenses
  deleteExpenses = (filterId) => {
    const newState = this.state.expenses.filter((expense) => {
      return expense.id !== filterId;
    });

    this.setState({ ...this.state, expenses: newState });
  };

  //Edit Expenses
  editExpenses = (id, amount, description, date) => {
    // Remove that particular record from the table
    this.deleteExpenses(id);

    this.setState((prevState) => {
      return {
        ...this.state,
        expenses: prevState.expenses,
        expenseEditItem: {
          amount: amount,
          description,
          date,
          isInEditMode: true,
        },
      };
    });
  };

  render() {
    return (
      <div className="revenue-manager-container">
        <AddEditContainerArea
          addExpenses={this.addExpenses}
          expenseEditItem={this.state.expenseEditItem}
          filterOrAddView={this.state.filterOrAddView++}
        />
        <DisplayExpenses
          expenses={this.state.expenses}
          deleteExpenses={this.deleteExpenses}
          editExpenses={this.editExpenses}
        />
      </div>
    );
  }
}

export default RevenueManager;
