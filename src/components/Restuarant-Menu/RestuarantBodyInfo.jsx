import React, { useState, useEffect } from 'react';
import './RestuarantBodyInfo.css';
import { useParams, useLocation } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import { db } from '../../firebase';
import DisplayMenu from './DisplayMenu';
import Scrollspy from 'react-scrollspy';

const RestuarantBodyInfo = () => {

    let { id } = useParams();
    let restuarantId = id;
    console.log(id);
    const [{ RestuarantInfo, CurrentRestuarantId, user }, dispatch] = useStateValue();   
    const [CurrentRestuarantIdUpdate, setCurrentRestuarantIdUpdate] = useState(false);
    const location = useLocation();
    // console.log(location);

    useEffect(() => {
        db.collection("RestuarantInfo").orderBy("timestamp").onSnapshot((snapshot) => {
          dispatch({
            type: "UPDATE_RESTUARANTINFO",
            items: snapshot.docs.map((doc) => ({
              id: doc.id,
                RestuarantInfo: doc.data(), // RestuarantInfo is the array created in reducer.js file and 
                // all the information of all the restuarant is appended 
                //to that array.
            })),
          });
        });
      }, [dispatch]);
    if (!CurrentRestuarantIdUpdate) {
        dispatch({
            type: "UPDATE_RESTUARANT_ID",
            item: {
                RestuarantId: restuarantId,
            }
        });
        setCurrentRestuarantIdUpdate(true);
    }
    
    let displayRestuarant = RestuarantInfo.filter((item) => {
        return item.id === restuarantId;
    });
    let sidebarArr = [];
    
    displayRestuarant.map((item) => (
        
        (item.RestuarantInfo.Sidebar).map((i) => (
            sidebarArr.push(i)
        ))
        
    ))
    

    return (
        <>
            <div className="RetuarantBodyInfo_main" >
                <div className="RestuarantBodyInfo_sidebar">
                <Scrollspy
                            items={sidebarArr}
                            currentClassName="RestuarantBodyInfo_activeHighlight" >
                        {sidebarArr.map((item) => (
                            
                                <li>
                                    <a href={`#${item ? item : ""}`}><div className="RestuarantBodyInfo_Sidebar_Item">{item}</div></a>
                            </li>
                            
                            ))}
                        </Scrollspy>
                </div>

                <div className="RestuarantBodyInfo_body">
                    {sidebarArr.map((item, index) => (
                        <div id={item}>
                            <DisplayMenu
                                key={restuarantId}
                                id={restuarantId}
                                menuCollectionName={item}
                                lastIndex={index === sidebarArr.length - 1 ? false : true}
                                restuarantId={restuarantId}
                            />
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    );
 };

export default RestuarantBodyInfo;