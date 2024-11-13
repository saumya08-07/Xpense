import React from 'react'
import './AddExpense.css'

function AddExpense() {
  return (
    <div className='container px-2'>
        <h4 className='main-header'>Add Expense<i className="fa-solid fa-angles-down"></i></h4>
        <div className="container form-container">
            <div className="label-header">How Much?</div>
            <input type="text" className="expense-fields" placeholder="0.00" aria-label="UserId" aria-describedby="basic-addon1" />
            <input type="text" className="expense-fields" placeholder="Description" aria-label="UserId" aria-describedby="basic-addon1" />
            <select class="expense-fields" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <input type="date" id="date" name="date" className="expense-fields" placeholder="Transaction Date" aria-label="UserId" aria-describedby="basic-addon1" />
            <div className="add-btn-wrap">
                <button className="add-btn"><i class="fa-solid fa-check"></i></button>
            </div>
        </div>
    </div>
  )
}

export default AddExpense