import React,{useState, useEffect} from 'react';
import './DisplayPastOrder.css';
import Check1 from '../Images/Check1.png';
import aadd from '../Images/aadd.jpeg';
import { useStateValue } from '../StateProvider';
import { db } from "../firebase";
import { useHistory } from 'react-router-dom';

const DisplayPastOrder =  (props) => {
    const [{ RestuarantInfo, user, userName, userUID }, dispatch] = useStateValue();
    const history = useHistory();
        useEffect(() => {
            db.collection("RestuarantInfo").orderBy("timestamp").onSnapshot((snapshot) => {
              dispatch({
                type: "UPDATE_RESTUARANTINFO",
                items: snapshot.docs.map((doc) => ({
                  id: doc.id,
                    RestuarantInfo: doc.data(), // RestuarantInfo is the array created in reducer.js file and 
                    // all the information of all the restuarant is not appended 
                    //to that array.
                })),
              });
            });
          }, [dispatch]);
    let displayRestuarant = RestuarantInfo.filter((item) => {
        return item.id === props.restuarantId;
    });
    console.log(displayRestuarant);
    console.log(props.order);

    const handleClicked = (event) => {
        event.preventDefault();
        history.push(`/RestuarantMenu/${props.restuarantId}`);
    };


    return(
        <>
        {displayRestuarant.map((item) => (
            <div className='DisplayPastOrder_Section'>
                <div className='DisplayPastOrder_RestuarantInfo'>
                    <img onClick={handleClicked} className='DisplayPastOrder_RestuarantImage' src={item.RestuarantInfo.imageUrl} />
                    <div onClick={handleClicked} className='DisplayPastOrder_Section_Info'>
                        <div className='DisplayPastOrder_RestuarantName'>{item.RestuarantInfo.name}</div>
                        <div className='DisplayPastOrder_OrderId'>ORDER #{props.orderNumber}</div>
                        <div className='DisplayPastOrder_OrderDate'>{props.time}</div>
                    </div>
                    <div className='DisplayPastOrder_delivered'>
                        <div className="DisplayPastOrder_deliverytag">Delivered</div>
                        <img src={Check1} />
                    </div>
                </div>
                <hr />
                <div className="DisplayPastOrder_MenuSection">
                    <div className="DisplayPastOrder_Menu">
                        {(props.order).map((item, index) => (
                            index!==props.order.length-1 ? item.Menu +' x '+ item.Count + ' , ' : item.Menu +' x '+ item.Count
                        ))}
                    </div>
                    <div className="DisplayPastOrder_Bill"><span></span><span>Total Paid:  ₹{props.Bill}</span></div>
                </div>
            </div>
         ))} 
        </>
    );
};

export default DisplayPastOrder;