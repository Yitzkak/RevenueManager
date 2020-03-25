import React from "react";

const DisplayExpenses = ({ expenses }) => {
  return (
    <div className="display-area-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length ? (
            expenses.map(expense => {
              return (
                <tr key={expense.id}>
                  <td>{expense.date}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
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
            <td></td>
            <td>Total:</td>
            <td>
              {expenses.length
                ? expenses.reduce((total, num) => {
                    return total + Number(num.amount);
                  }, 0)
                : 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DisplayExpenses;
