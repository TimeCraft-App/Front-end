import React from 'react'
import "./ApplyTimeoff.css"

const ApplyTimeoff = () => {
  return (
    <div className='apply-timeoff'>
        <h3>Apply Timeoff</h3>
        <ul>
          <li><i>Vacation leave</i></li>
          <li><i>Sick leave</i></li>
          <li><i>Personal leave</i></li>
          <li><i>Other leave</i></li>
        </ul>
        <button type='button' class='apply-btn'>Apply Timeoff</button>
    </div>
  )
}

export default ApplyTimeoff