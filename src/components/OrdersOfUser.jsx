import React,{useState,useEffect} from 'react';
import './OrdersOfUser.css';
import DisplayPastOrder from './DisplayPastOrder';
import { db } from "../firebase";
import { auth } from "../firebase.js";
import { useStateValue } from "../StateProvider";
import OrderEmpty from '../Images/orderEmpty.jpg';

const OrdersOfUser = () => {

    const [{ RestuarantInfo, user, userName, userUID }, dispatch] = useStateValue();
    const [pastOrders, setPastOrders] = useState([]);
    
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
    useEffect(() => {
        db.collection("UserOrders")
                .doc(userUID)
                .collection("Orders")
                .orderBy("timestamp")
                .onSnapshot((snapshot) => {
                    let arr = snapshot.docs.map((doc) => doc.data());
                    setPastOrders(arr);
                });
        console.log("In");
    }, [userUID, dispatch]);
    console.log(userUID);
    console.log(pastOrders);
    return(
        <>
            <div className='OrdersOfUser_MainSection'>
                {/* <div className='OrdersOfUser_Section'></div> */}
                {pastOrders.length===0 && 
                    <>
                        <img className='OrderEmpty_image'src={OrderEmpty}/>
                        <div className='OrderEmpty_heading'>You have not order anything yet.</div>
                    </>
                }
                {pastOrders.length!==0 && <>
                    <div className='OrdersOfUser_Heading'>Past Orders</div>
                    {pastOrders.slice(0).reverse().map((item, index) => (
                        <DisplayPastOrder
                            key={index}
                            restuarantId={item.RestuarantId}
                            order={item.Order}
                            Bill={item.Bill}
                            time={item.time}
                            orderNumber={item.orderNumber}
                            timeStamp={item.timestamp}
                        />
                    ))}
                </>}
            </div>
        </>
    );
};

export default OrdersOfUser;