import React from 'react'
import "./Timeoffs.css"

const Timeoffs = () => {
    return (
        <div className='upcoming-timeoff'>
            <h3>
                Upcoming Timeoff
            </h3>
            <img src={require("./Assets/beach.jpg")} alt="" className='image'/>
            <button type='button' className='view-my-time'>View my time</button>
        </div>
    )
}

export default Timeoffs