import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const DisplayExpenses = ({ expenses, deleteExpenses, editExpenses }) => {
  let todaysDate = moment().format("YYYY-MM-D");

  //This is used to calculate the total expenses for each day
  let todaysExpensesAmounts = [];

  return (
    <div className="display-area-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.length ? (
            expenses
              .filter((expense) => {
                return moment(todaysDate).isSame(expense.date);
              })
              .map((expense) => {
                //This is used to hold the invidual expenses amount for each day
                todaysExpensesAmounts.push(expense.amount);
                return (
                  <tr key={expense.id}>
                    <td>{moment(expense.date).format("DD-MM-YYYY")}</td>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon="pencil-alt"
                            onClick={() =>
                              editExpenses(
                                expense.id,
                                expense.amount,
                                expense.description,
                                expense.date
                              )
                            }
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon="trash-alt"
                            onClick={() => deleteExpenses(expense.id)}
                          />
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })
          ) : (
            <tr>
              <td> No record(s) to display</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Total:</td>
            <td></td>
            <td>
              {todaysExpensesAmounts.length
                ? todaysExpensesAmounts.reduce((total, num) => {
                    return total + Number(num);
                  }, 0)
                : 0}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DisplayExpenses;
