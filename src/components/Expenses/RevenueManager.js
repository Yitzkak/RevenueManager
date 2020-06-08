import React from "react";
import DisplayExpenses from "./DisplayExpenses";
import AddEditContainerArea from "./AddFIlterContainerArea";
import { v4 as uuidv4 } from "uuid";
import moment from "moment"

import "./style.scss";

//const RevenueManager = () => {
class RevenueManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, date: "2020-04-13", description: "Food", amount: "2000" },
        { id: 2, date: "2020-04-13", description: "Cloth", amount: "1000" },
        { id: 3, date: "2020-04-13", description: "Bench", amount: "20000" },
        { id: 4, date: "2020-04-13", description: "Phone", amount: "25000" },
        { id: 5, date: "2020-05-23", description: "Fuel", amount: "500" },
        { id: 6, date: "2020-05-24", description: "gift", amount: "2500" },
        { id: 7, date: "2020-03-12", description: "Data", amount: "1000" },
        { id: 8, date: "2020-05-27", description: "Shoe", amount: "1000" },
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
    const { description, amount, date } = expenses;

    //Check to see if the expense description is already in the database
    //If so, add the amount else add the new entry
    let expenseAlreadyExist = this.state.expenses.filter((expense) => {
      return expense.description === description && expense.date === date;
    });

    if (!expenseAlreadyExist.length) {
      let newExpenses = [...this.state.expenses, { ...expenses, id: uuidv4() }];
      this.setState({ ...this.state, expenses: newExpenses });
    } else {
 
      let expenseID = expenseAlreadyExist[0].id
      let updatedExpenses = this.state.expenses.map(expense=> {
          const { id, date, description } = expense
         return expense.id === expenseID ? {id, date, description, amount: parseInt(expense.amount) + parseInt(amount)}: expense
      })
      this.setState({ ...this.state, expenses: updatedExpenses })
    }
  };

  // Delete Expenses
  deleteExpenses = (filterId) => {
    const newState = this.state.expenses.filter((expense) => {
      return expense.id !== filterId;
    });

    this.setState(() => {
      return {
        ...this.state,
        expenses: newState,
      };
    });
  };

  //Edit Expenses
  editExpenses = (id, amount, description, date) => {
    this.setState((prevState) => {
      return { ...this.state, filterOrAddView: prevState.filterOrAddView++ };
    });
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
        filterOrAddView: prevState.filterOrAddView++,
      };
    });
  };

  //Filter Expenses
  filterExpenses = (filterValue) =>{
    let todaysDate = moment().format("YYYY");
    console.log("Taa kwa:", todaysDate);
    const {searchByDailyWeekly, searchByYear, searchByCategory} = filterValue;
    const s1 = searchByYear;
    const s2 = searchByDailyWeekly;
    const s3 = searchByCategory;

    switch (true) {
      case (s1 !== "") && (s2 === "") && (s3 === ""): console.log("hey s1 here") 
        break;
      case (s1 !== "") && (s2 !== "") && (s3 === ""):  console.log("hey s1 here") 
       
        break;
      case (s1 !== "") && (s2 !== "") && (s3 !== ""): 
        console.log("hey s1 here") 
        break;
    
      default:
        break;
    }
  }

  render() {
    return (
      <div className="revenue-manager-container">
        <AddEditContainerArea
          addExpenses={this.addExpenses}
          expenseEditItem={this.state.expenseEditItem}
          filterOrAddView={this.state.filterOrAddView}
          filterExpenses = {this.filterExpenses}
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
