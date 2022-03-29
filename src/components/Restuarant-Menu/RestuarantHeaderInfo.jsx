import React from 'react';
import './RestuarantHeaderInfo.css';
import StarIcon from '@material-ui/icons/Star';
import discount from '../../Images/discount.png';
import discountWhite from '../../Images/discountWhite.png';

const RestuarantHeaderInfo = (props) => {
    
    return (
        <>
            <div className="RestuarantHeaderInfo_main">
                <img className="RestuarantHeaderInfo_image" src={props.image}></img>
                <div className="RestuarantHeaderInfo_info">
                    <div className="RestuarantHeaderInfo_name">{props.name}</div>
                    <div className="RestuarantHeaderInfo_cuisine">{props.cuisine}</div>
                    <div className="RestuarantHeaderInfo_details">
                        <div className="RestuarantHeaderInfo_rating">
                            <div><StarIcon className="RestuarantHeaderInfo_icon" /><span>{props.rating}</span></div>
                            <p>100+ Ratings</p>
                        </div>
                        <div className="RestuarantHeaderInfo_deliveryTime">               
                            <div>{props.time}</div>
                            <p>Delivery Time</p>
                        </div>
                        <div className="RestuarantHeaderInfo_costOfTwo">
                            <div>{(props.costForTwo).split(" ")[0]}</div>
                            <p>Cost for two</p>
                        </div>
                    </div>
                </div>
                {
                    (props.offer !== "") ?
                        <div className="RestuarantHeaderInfo_offer_section">
                            <div className="RestuarantHeaderInfo_offer_heading">OFFER</div>
                            <div className="RestuarantHeaderInfo_offer">
                                <img src={discountWhite} />
                                <div>{(props.offer).split("|")[0]}upto ₹120 | {(props.offer).split("|")[1]}</div>
                            </div>
                            <div className="RestuarantHeaderInfo_offer">
                                <img src={discountWhite} />
                                <div>₹125 off on orders above ₹249 | Use code WIN125</div>
                            </div>
                        </div>
                            :
                            <div className="RestuarantHeaderInfo_offer_section">
                                <div className="RestuarantHeaderInfo_offer_heading">OFFER</div>
                                <div className="RestuarantHeaderInfo_offer">
                                    <img src={discountWhite} />
                                    <div>20% off up to ₹200 | Use AMEX20 Above ₹500</div>
                                </div>
                            </div>
                }
            </div>
            
        </>
    );
};

export default RestuarantHeaderInfo;
