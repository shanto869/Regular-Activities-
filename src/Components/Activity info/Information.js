import React from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import './Information.css'

const Information = (props) => {
    const { totalTime } = props;
    return (
        <div className='information'>
            <div className='my-info'>
                <div className='my-pic'>
                    <img src="https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <h6>Name: Shanto Biswas</h6>
                <h6>Junior Web Developer</h6>
                <small>Age: 24</small>
                <small>Nationality: Bangladeshi</small>
            </div>
            <hr />

            <ActivityDetails totalTime={totalTime}></ActivityDetails>
        </div>
    );
};

export default Information;