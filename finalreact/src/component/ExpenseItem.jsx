import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const [newTitle, setNewTitle] = useState("update title");
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(newTitle);
    // Now, the title will be updated with the value of newTitle
  };

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const month = props.date.toLocaleString('en-Us', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-Us', { day: '2-digit' });

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>change title</button>
    </div>
  );
}

export default ExpenseItem;
