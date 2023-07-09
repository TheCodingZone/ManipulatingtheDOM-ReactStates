import React from 'react'

export default function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
    
        <h2>{props.expenseDetail}</h2>
       
        <div  className="expense-item__price">{props.expensePrice}</div>
        </div>
       
     
  )
}
