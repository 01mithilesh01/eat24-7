import React, { useEffect } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Check1 from '../../Images/Check1.png';
// import CartEmpty from '../../Images/CartEmpty.png';
import './OrderPlaced.css';
import { useStateValue } from '../../StateProvider';
import { useHistory } from 'react-router-dom';

const OrderPlaced = () => {
    const [{userName}, dispatch] = useStateValue();
    console.log(userName);
    const history = useHistory();
    const ReturnHome = (event) => {
        event.preventDefault();
        history.push(`/`);
    };
    return(
        <>
            <div className='OrderPlaced_MainSection'>
                <img className='OrderPlaced_CheckImage' src={Check1} />
                <div className='OrderPlaced_UserName'>Hey {userName}</div>
                <div className='OrderPlaced_YourOrderConfirmed'>Your order has been confirmed!</div>
                <div className='OrderPlaced_Email'>You will receive an order confirmation email with details of your order.</div>
                <button onClick={ReturnHome} className='OrderPlaced_Button'>Return Home</button>
            </div>
        </>
    );
};

export default OrderPlaced;
{/* <img className='check_Logo' src={Check1} /> */}