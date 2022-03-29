import React from 'react';
import belgianWaffle from '../Images/belgianWaffle.jpeg';
import './DisplaySearchRestuarant.css';
import {useHistory} from 'react-router-dom';

const DisplaySearchRestuarant = (props) => { 
    const history = useHistory();
    const handleClickedRestuarant = (event) => {
        event.preventDefault();
        // console.log(props.name);
        // console.log(props.id);
        history.push(`/RestuarantMenu/${props.id}`);
    };
    return (
        <>
            <div className="DisplaySearchRestuarant_div" onClick={handleClickedRestuarant}>
                <img src={props.img} className="RestuarantImage_DSR"/>
                <div className="SearchRestuarant_box_DSR">
                    <div className="RestuarantName_DSR">{props.name}</div>
                    <div className="RestuarantName_Type_DSR">Restuarant</div>
                </div>
            </div>
        </>
    );
};

export default DisplaySearchRestuarant;