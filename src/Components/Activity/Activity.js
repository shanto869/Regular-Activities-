import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { activity } = props;
    // console.log(activity)
    const { picture, name, id, duration_time, break_time } = activity;
    // console.log(activity)
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-info'>
                <h4>{name}</h4>
                <p>Duration: {duration_time} min</p>
            </div>
            <button>Add To List</button>
        </div>
    );
};

export default Activity;