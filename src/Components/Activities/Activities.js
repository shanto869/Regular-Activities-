import React, { useState } from 'react';
import Information from '../Activity info/Information';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [totalTime, setTotalTime] = useState([]);


    useState(() => {
        fetch('fakeData/activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [totalTime])


    const addTotalTime = (time) => {
        let newTime = [...totalTime, time]
        setTotalTime(newTime)
    }

    return (
        <div>
            <h5>Select Today's Activities</h5>

            <div className='activities-container'>
                <div className="activity-container">
                    {
                        activities.map(activity => <Activity activity={activity} key={activity.id} addTotalTime={addTotalTime}></Activity>)
                    }
                </div>

                <Information totalTime={totalTime}></Information>
            </div>
        </div>
    );
};

export default Activities;