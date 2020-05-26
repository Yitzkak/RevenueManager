import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DisplayExpenses = ({ expenses, deleteExpenses, editExpenses }) => {
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
            expenses.map((expense) => {
              return (
                <tr key={expense.id}>
                  <td>{expense.date}</td>
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
              {expenses.length
                ? expenses.reduce((total, num) => {
                    return total + Number(num.amount);
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
