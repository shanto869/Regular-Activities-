import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (

        <div className='header'>
            <h2>
                <FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
                <span>Ultra Daily Life Activity</span>
            </h2>
        </div>

    );
};

export default Header;