import React from 'react';

import Logo from '../assests/logo/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__item">
                <div><img className="footer__logo" src={Logo}/></div>
            </div>
            <div className="footer__item">
                <div>Conditions of Use</div>
            </div>
            <div className="footer__item">
                <div>Privacy Notice</div>
            </div>
            <div className="footer__item">
                <div>Internet-Based Ads</div>
            </div>
            <div className="footer__item">
                <div>© 1996-2021, Amazon.com, Inc. or its affiliates</div>
            </div>        
        </div>
    );
};

export default Footer;