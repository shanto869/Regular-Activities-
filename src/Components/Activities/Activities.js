import React, { useState } from 'react';
import Information from '../Activity info/Information';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useState(() => {
        fetch('fakeData/activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <div>
            <h3>Select Today's Activities</h3>

            <div className='activities-container'>
                <div className="activity-container">
                    {
                        activities.map(activity => <Activity activity={activity} key={activity.id}></Activity>)
                    }
                </div>

                <Information></Information>
            </div>
        </div>
    );
};

export default Activities;