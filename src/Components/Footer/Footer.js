import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="py-5 my-3 text-center shadow-lg font-ubuntu">
                    <h6 className="fs-4">Copyright 2022<span className="logo-color">Dailies</span><span
                        className="logo-color">Activities</span></h6>
                </div>
            </footer>
        </div>
    );
};

export default Footer;