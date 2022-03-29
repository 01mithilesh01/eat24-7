import React from 'react';
import './OfferCarousel.css';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import offer1 from '../Images/offer1.jpg';
import offer2 from '../Images/offer2.jpg';
import offer3 from '../Images/offer3.jpg';
import offer4 from '../Images/offer4.jpeg';
import offer5 from '../Images/offer5.jpg';
import offer6 from '../Images/offer6.jpg';
import offer7 from '../Images/offer7.jpg';
import offer8 from '../Images/offer8.jpeg';
import {useHistory} from 'react-router-dom';
import OfferCarouselDisplay from './OfferCarouselDisplay';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1080, itemsToShow: 4 },
  ];

const data = [{ key: 0, imgUrl: offer1, id: "uGfvAsstKWAHQeLQW8ru" }, //
    { key: 1, imgUrl: offer2, id: "QPB48LU75ZFX9LRY0BRs" }, //
    { key: 2, imgUrl: offer3, id: "W6qFuyRw3U8lwLps8OrJ" }, //
    { key: 3, imgUrl: offer4, id: "4HXo91EzCSvh6AMBmaKP" }, //
    { key: 4, imgUrl: offer5, id: "AYtt9BQRzDBCsFAMDGCO" }, //
    { key: 5, imgUrl: offer6, id: "nORdjGCxAdCgZY8AxveW" }, //
    { key: 6, imgUrl: offer7, id: "7fpfIxN5IGKS0kITYx5a" }, //
    { key: 7, imgUrl: offer8, id: "QElZgcbETW0C54BKFEFL" }  //
];



//id="4HXo91EzCSvh6AMBmaKP"

const OfferCarousel = () => { 
    const history = useHistory();
    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
            
                    {data.map((d) => (
                        <OfferCarouselDisplay
                            key={d.key}
                            keys={d.key}
                            imgUrl={d.imgUrl}
                            id={d.id}
                        />
                        
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default OfferCarousel;

{/* <Item key={d.key}><img onClick={(d) => (history.push(`/RestuarantMenu/${d.id}`))}  className="img" src={d.imgUrl} /></Item> */}