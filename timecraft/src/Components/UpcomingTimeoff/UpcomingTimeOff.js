import React from 'react'
import "./UpcomingTimeOff.css"

const UpcomingTimeOff = () => {
    return (
        <div className='upcoming-timeoff'>
            <h3>
                Upcoming Timeoff
            </h3>
            <img src={require("./assets/beach.jpg")} alt="" />
            <button type='button' className='view-my-time'>View my time</button>
        </div>
    )
}

export default UpcomingTimeOff