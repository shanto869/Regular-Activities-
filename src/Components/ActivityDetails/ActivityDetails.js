import React, { useState } from 'react';
import './ActivityDetails.css'

const ActivityDetails = (props) => {
    const [breakTime, setBreakTime] = useState([]);

    const addBreakTime = (time) => {
        console.log('clicked')
    }

    return (
        <div className='activity-details'>
            <div className='break-time'>
                <strong>Break Time</strong>
                <button onClick={() => addBreakTime()}>10 m</button>
                <button>15 m</button>
                <button>30 m</button>
                <button>45 m</button>
            </div>
            <h4>Activity Details</h4>

            <div className='time'>Total Time: { }</div>
            <div className='time'>Break Time: { }</div>
            <button className='btn-completed'>Daily Activity Completed</button>
        </div>
    );
};

export default ActivityDetails;