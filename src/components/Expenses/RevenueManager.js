import React from "react";
import AddExpenses from "./AddExpenses";
import DisplayExpenses from "./DisplayExpenses";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

//const RevenueManager = () => {
class RevenueManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };
  }

  addExpenses = expenses => {
    console.log("I got here:", expenses);
    let newExpenses = [...this.state.expenses, { ...expenses, id: uuidv4() }];
    this.setState({ expenses: newExpenses });
    console.log(this.state.expenses);
  };

  render() {
    return (
      <div className="revenue-manager-container">
        <AddExpenses addExpenses={this.addExpenses} />
        <DisplayExpenses expenses={this.state.expenses} />
      </div>
    );
  }
}

export default RevenueManager;
