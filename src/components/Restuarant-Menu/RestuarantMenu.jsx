import React, { useState, useLocation, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import { db } from '../../firebase';
import RestuarantHeaderInfo from './RestuarantHeaderInfo';
import RestuarantBodyInfo from './RestuarantBodyInfo';

const RestuarantMenu = () => {
    let { id } = useParams();
    let restuarantId = id;

    const [{ RestuarantInfo,user}, dispatch] = useStateValue();
  
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
        return item.id === restuarantId;
      });

    // console.log(displayRestuarant);
    return (
        <>
            
            {displayRestuarant.map((item) => (
              // <h1 key={item.id}>{item.RestuarantInfo.name}</h1>
                <RestuarantHeaderInfo
                key={item.id}
                image={item.RestuarantInfo.imageUrl}
                name={item.RestuarantInfo.name}
                cuisine={item.RestuarantInfo.cuisine}
                rating={item.RestuarantInfo.rating}
                time={item.RestuarantInfo.deliveryTime}
                costForTwo={item.RestuarantInfo.serving}
                offer={item.RestuarantInfo.offer}
                />
            ))}
            <RestuarantBodyInfo />
        </>
    )
}

export default RestuarantMenu;
