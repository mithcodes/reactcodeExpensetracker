import React, { useState } from 'react';
import Expenses from './component/Expenses';
import NewExpense from './component/NewExpense';

let dummyexpenses = [
  {
    id: 'e1',
    title: 'School Fee',
    date: new Date(2023, 5, 12),
    amount: 1233,
  },
  {
    id: 'e2',
    title: 'School Fee',
    date: new Date(2023, 5, 12),
    amount: 6500,
  },
  {
    id: 'e3',
    title: 'School Fee',
    date: new Date(2023, 5, 12),
    amount: 4544,
  },
];

function App() {
    const [expenses, setExpenses] = useState(dummyexpenses)

    const addExpenseHandler = (expense) => {
        console.log(expense)
        const updatedExpenses = [expense, ...expenses]
        setExpenses(updatedExpenses)
    }

    return (
        <div>
            <h2>Let's get started</h2>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
