import React,{useState} from 'react';
import VegIcon from '../../Images/VegIcon.png';
import NonVegIcon from '../../Images/NonVegIcon.png';
import { useStateValue } from '../../StateProvider';
import { db } from '../../firebase';

const CartMenu = (props) => {
    const [{ Order }, dispatch] = useStateValue();


    


    
    const add = () => {
                   
        dispatch({
            type: "ADD_ITEM_IN_CART",
            item: {
            id: props.id,
            menuCollectionName:props.menuCollectionName,    
            VegNonV: props.VegNonV,
            Menu: props.Menu,
            Price: props.Price,
            Count: 1,
            // RestuarantId: props.restuarantId
            }
        });
                    
    };
    const remove = () => { 
        
        dispatch({
            type: "REMOVE_ITEM_FROM_CART",
            item: {
                id: props.id,  // id of a dish
                restuarantId: props.restuarantId
            }
        });
    };

    return (
        <div className='Menu_Display'>
            <div className='Menu_Display_subsection1'>
            {props.VegNonV === "Veg" ?
                <img className="Menu_Veg_NonVeg" src={VegIcon} />
                :
                <img className="Menu_Veg_NonVeg" src={NonVegIcon} />
            }
                <div className='Menu_Name'>{props.Menu}</div>
            </div>
            <div className="Menu_Add_Button" >
                <div className="Menu_minus" onClick={remove}>−</div>
                    <span>{props.Count}</span>
                    <div className="Menu_plus" onClick={add}>+</div>
            </div>
            <div className='Menu_Price'>
                <span></span>
                <span>₹{Math.round(props.Price * props.Count * 100) / 100}</span>
            </div>
        </div>
    );
 };

export default CartMenu;