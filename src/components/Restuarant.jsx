import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import discount from '../Images/discount.png';
import { useHistory } from 'react-router-dom';
import './Restuarant.css';

const Restuarant = (props) => { 
    const history = useHistory();
    const handleClickOnRestuarant = (e) => { 
        console.log(props.id);
        e.preventDefault();
        history.push(`/RestuarantMenu/${props.id}`);
    };
    
    return (
        
            <div className="box" onClick={handleClickOnRestuarant}>
            
                <div className="Restaurant1">
                    <img className="Restuarant_img" src={props.image} alt="resturant-img"/>
                    <div className="Restuarant_Name">{props.restaurantName}</div>
                        <div className="Food_Details">{props.foodDetails}</div>
                        <div className="Details">
                        {((props.rating).charAt(0)==="4") ?
                            <div className="Rating_green"><StarIcon className="Icon" /><span >{props.rating}</span></div>
                            : <div className="Rating_yellow"><StarIcon className="Icon" /><span >{props.rating}</span></div>}
                            <div className="dot">•</div>
                            <div className="Time">{props.time}</div>
                            <div className="dot">•</div>
                            <div className="People">{props.people}</div> 
                        </div>

                        { (props.coupen!=="") &&
                            <hr />
                        }
                    
                        {(props.coupen !== "")? <div className="discount">
                            <img className="discount__img" src={discount} />
                            <p>{props.coupen}</p>
                        </div>: null }
                </div>
            </div>
    );
};

export default Restuarant;