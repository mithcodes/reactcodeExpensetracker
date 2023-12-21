import { useState } from 'react'
import Expenses from './component/Expenses'

function App() {
  const [count, setCount] = useState(0)
  let expenses=[
    {
    id:'e1',
    title:"school fee",
    date: new Date(2023,5,12),
    amount: 1233,
  },
  {
    id:'e2',
    title:"school fee",
    date: new Date(2023,5,12),
    amount: 6500,

  },

  {
    id:'e3',
    title:"school fee",
    date: new Date(2023,5,12),
    amount:4544,

  },

]

  return (
   <div>
    <h2>lets get started</h2>
    <Expenses item={expenses}/>
   </div>
  )
}

export default App
