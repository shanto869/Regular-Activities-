import React, { useEffect, useState } from 'react';
import './Activity.css'

const Activity = (props) => {
    const { activity, addTotalTime } = props;
    const { picture, name, id, duration_time, break_time } = activity;


    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-info'>
                <h5>{name}</h5>
                <p>Duration: {duration_time} min</p>
            </div>
            <button onClick={() => addTotalTime(duration_time)}>
                Add To List
            </button>
        </div>
    );
};

export default Activity;