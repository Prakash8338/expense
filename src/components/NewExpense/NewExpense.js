
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
  const [isediting, setIsEdting] = useState(false);
  const saveExpenseDataHandler= (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()

    };
    props.onAddExpense(expenseData);
    setIsEdting(false);
  }

  const setHandler = () => {
    setIsEdting(true);

  };

  const stopHandler = () => {
    setIsEdting(false);
  }

  
  return (
    <div className = "new-expense">
      {!isediting && <button onClick = {setHandler}> Add New Expense</button>}
      {isediting && <ExpenseForm onCancel = {stopHandler} onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>}
    </div>

  );

}

export default NewExpense;