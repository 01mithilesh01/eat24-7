import React, { useRef, useState } from 'react';
import './SignIn.css';
import OfferCarousel from './OfferCarousel';
import Login from './Login';
import Signup from './Signup';



const SignIn = (props) => { 
    console.log(props.location);
    return (
        
        <div className="SignIn_Page">
            <Login  />
            <Signup />
            </div>      
    );
};

export default SignIn;