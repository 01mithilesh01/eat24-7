import React,{useState} from 'react';
import Item from './Item';
import {useHistory} from 'react-router-dom';

const OfferCarouselDisplay = (props) => {
    const history = useHistory();
    const handleClick = (event) => {
        event.preventDefault();
        history.push(`/RestuarantMenu/${props.id}`);
    };
    return(
        <>
            <Item key={props.keys}><img onClick={handleClick}  className="img" src={props.imgUrl} /></Item>
        </>
    );
};

export default OfferCarouselDisplay;