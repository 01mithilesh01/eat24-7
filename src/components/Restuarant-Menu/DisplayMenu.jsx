import React, { useState, useEffect } from 'react';
import {useStateValue} from '../../StateProvider';
import { db } from '../../firebase';
import { useParams, Link, useLocation } from "react-router-dom";
import './DisplayMenu.css';
import VegIcon from '../../Images/VegIcon.png';
import NonVegIcon from '../../Images/NonVegIcon.png';
import MenuItem from './MenuItem';

const DisplayMenu = (props) => { 
    let { id } = useParams();
    const [Menu, setMenu] = useState([]);
    const [{ RestuarantInfo,user}, dispatch] = useStateValue();
    const [isLogged, setIsLogged] = useState(false);
  
    // const [order, setOrder] = useState({});

    // const add = () => {
    //   setOrder({ ...order, first: 'new foobar' });
    //   console.log(order);
    // };
  
    useEffect(() => {
      if (user === null)
        setIsLogged(false);
      else
        setIsLogged(true);
    }, [user]);
  
    useEffect(() => {
        db.collection("RestuarantInfo")
          .doc(props.id)
          .collection(props.menuCollectionName)
          .orderBy('timestamp')
          .onSnapshot((snapshot) => {
            setMenu(snapshot.docs.map((doc) => doc.data()));
          });
          console.log("updated ---");
      },[id]);
    
    
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
    
    return (
        <>
            <div className="DisplayName_heading_options">
                <div className="DisplayMenu_heading">{props.menuCollectionName}</div>
                <div className="DisplayMenu_options">{Menu.length} ITEMS</div>
            </div>
            {Menu.map((item, index) => (
                
                <>
                <MenuItem
                    menuCollectionName={props.menuCollectionName}
                    VegNonV={item.VegNonV}
                    Menu={item.Menu}
                    Price={item.Price}
                    restuarantId={props.restuarantId}
                  />
                    {/* {item.VegNonV === "Veg" ?
                        <img className="DisplayName_Veg_NonVeg" src={VegIcon} />
                        :
                        <img className="DisplayName_Veg_NonVeg" src={NonVegIcon} />
                    }
                  <div className="DisplayName_Info">
                      <span>
                        <div className="DisplayName_MenuName">{item.Menu}</div>
                        <div className="DisplayName_Price">₹{item.Price}</div>
                    </span>
                    { isLogged ?
                      <div onClick={add} className="DisplayName_Add_Button" >
                        ADD
                      </div>
                    :
                    <Link to="/SignIn">
                        <div className="DisplayName_Add_Button" >
                          ADD
                        </div>
                      </Link>
                    }

                    </div> */}


                    { props.lastIndex  ?
                      <span>
                        {
                          (index !== Menu.length - 1) ?
                            <hr className="DisplayMenu_hr" />
                            :
                            <hr className="DisplayMenu_hrDark" />
                        }
                       </span>
                      :
                      <span>
                        {
                          (index !== Menu.length - 1)      && 
                          <hr className="DisplayMenu_hr" />
                        }
                        </span>
                    }
                </>
            ))
            }
        </>
    );
};

export default DisplayMenu;
