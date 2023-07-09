import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

export default function ExpenseItem(props) {
  const [expensePrice, setPrice] = useState(props.expensePrice);
  
  const updateData = () => {
    setPrice('100$');
  };
  
  const deleteData = (event) => {
    const row = event.target.parentNode;
    row.remove();
  };


  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <ExpenseDetails
        expenseDetail={props.expenseDetail}
        expensePrice={expensePrice}
      />
      <button className='btn btn-warning mx-2' onClick={updateData}>
        Change Price
      </button>
      <button className='btn btn-danger mx-2' onClick={deleteData}>
        DELETE
      </button>
    </div>
  );
}
