import React from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
