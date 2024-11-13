import React from 'react'
import './UpdateInfo.css'

function UpdateInfo() {
  return (
    <div className='container px-2'>
        <h4 className='main-header'>Update Information<i className="fa-solid fa-circle-info"></i></h4>
        <div className="container form-container">
            <input type="text" className="expense-fields" placeholder="Nickname" aria-label="UserId" aria-describedby="basic-addon1" />
            <input type="text" className="expense-fields" placeholder="Total Balance" aria-label="UserId" aria-describedby="basic-addon1" />
            <input type="text" className="expense-fields" placeholder="Income Per Month" aria-label="UserId" aria-describedby="basic-addon1" />
            <div className="add-btn-wrap">
                <button className="update-btn">Update</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateInfo