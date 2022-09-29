import React, { useEffect, useState } from 'react';
import './ActivityDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        if (!localStorageBreakTime) {
            setBreakTime('0 min')
        }

    }, [])

    const addBreakTime = (time) => {
        setBreakTime(time);
        localStorage.setItem('break-time', time);
    }

    const toastMessage = () => {
        toast.success("Congratulation you have done your activity!", {
            position: "top-center"
        });
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
            <h5 className='mt-4'>Activity Details</h5>

            <div className='time'>Total Time: {totalDuration} min</div>
            <div className='time show-break-time'>Break Time: {breakTime}</div>
            <button onClick={toastMessage} className='btn-completed'>
                Daily Activity Completed
            </button>

            <ToastContainer />
        </div>
    );
};

export default ActivityDetails;