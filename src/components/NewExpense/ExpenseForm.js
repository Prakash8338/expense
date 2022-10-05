
import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }


  const submitHandler = (event) =>{
    event.preventDefault(); // to save our browser to reload when we enter new data
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //that is used to transmit this data to parent newexpense

    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');

  }
  


  



  return (
    <form onSubmit = {submitHandler}>
      <div className = "new-expense__controls">
        <div className = "new-expense__control label">
          <label> Title </label>
          <input type = 'text' value = {enteredTitle} onChange = {titleChangeHandler}/>
        </div>
        <div className = "new-expense__control label">
          <label> Number </label>
          <input type = 'number' min= "0.01" step = "0.01" value = {enteredAmount} onChange = {amountChangeHandler}/>
        </div>
        <div className = "new-expense__control label">
          <label> Date </label>
          <input type = 'date' min= "2019-01-01" max = "2022-12-31" value = {enteredDate} onChange = {dateChangeHandler}/>
        </div>
      </div>
      <div className = "new-expense__actions">
        <button type = "button" onClick = {props.onCancel}>
          Cancel

        </button>
        <button type = "submit">
          Add expense
        </button>
      </div>
    </form>

  );


}

export default ExpenseForm;