import React from 'react';
import './Footer.css';
import FacebookIcon from '../Images/FacebookIcon.png';
import InstagramIcon from '../Images/InstagramIcon.png';
import TwitterIcon from '../Images/TwitterIcon.png';


const Footer = () => {
    return(
        <>
            <div className='Footer_Section'>
                <div className="Footer_Left">eat24/7</div>
                <div className="Footer_Middle">
                   <div className='Rights'>@2022 eat24/7 All Rights Reserved</div> 
                   <div  className='CreatedBy'>Created by : <a target="_blank" href='https://www.linkedin.com/in/mithilesh-patil-b1093a1a4/'>Mithilesh Patil</a></div>
                    </div>
                <div className="Footer_Right">
                    <a target="_blank" href='https://www.facebook.com/'><img src={FacebookIcon} /></a>
                    <a target="_blank" href='https://www.instagram.com/'><img src={InstagramIcon} /></a>
                    <a target="_blank" href='https://twitter.com/'><img src={TwitterIcon} /></a>
                </div>
            </div>
        </>
    );
};

export default Footer;