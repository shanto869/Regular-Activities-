import React, { useEffect, useState } from 'react';
import './ActivityDetails.css'

const ActivityDetails = (props) => {
    const { totalTime } = props;
    let totalDuration = 0;

    for (let time of totalTime) {
        totalDuration = totalDuration + time;
    }


    const [breakTime, setBreakTime] = useState('0 min');

    useEffect(() => {
        let localStorageBreakTime = localStorage.getItem('break-time');
        setBreakTime(localStorageBreakTime)

    }, [])

    const addBreakTime = (time) => {
        setBreakTime(time);
        localStorage.setItem('break-time', time);
    }


    return (
        <div className='activity-details'>
            <div className='break-time'>
                <strong>Break Time</strong>
                <button onClick={() => addBreakTime('10 min')}>10 m</button>
                <button onClick={() => addBreakTime('15 min')}>15 m</button>
                <button onClick={() => addBreakTime('30 min')}>30 m</button>
                <button onClick={() => addBreakTime('45 min')}>45 m</button>
            </div>
            <h4>Activity Details</h4>

            <div className='time'>Total Time: {totalDuration} min</div>
            <div className='time show-break-time'>Break Time: {breakTime}</div>
            <button className='btn-completed'>Daily Activity Completed</button>
        </div>
    );
};

export default ActivityDetails;