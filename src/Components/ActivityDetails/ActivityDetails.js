import React, { useState } from 'react';
import './ActivityDetails.css'

const ActivityDetails = (props) => {
    const { totalTime } = props;
    let totalDuration = 0;

    for (let time of totalTime) {
        totalDuration = totalDuration + time;

    }
    // let totalDuration = 0;
    // totalDuration = totalDuration + totalTime;

    const [breakTime, setBreakTime] = useState('0 min');

    const addBreakTime = (time) => {
        setBreakTime(time)
    }

    return (
        <div className='activity-details'>
            <div className='break-time'>
                <strong>Break Time</strong>
                <button onClick={() => addBreakTime('10 m')}>10 m</button>
                <button onClick={() => addBreakTime('15 m')}>15 m</button>
                <button onClick={() => addBreakTime('30 m')}>30 m</button>
                <button onClick={() => addBreakTime('45 m')}>45 m</button>
            </div>
            <h4>Activity Details</h4>

            <div className='time'>Total Time: {totalDuration} min</div>
            <div className='time'>Break Time: {breakTime}</div>
            <button className='btn-completed'>Daily Activity Completed</button>
        </div>
    );
};

export default ActivityDetails;