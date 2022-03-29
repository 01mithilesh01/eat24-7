import React, {useEffect} from 'react';
import './OfferRestuarants.css';
import { Link } from 'react-router-dom';
import offersNearYou from '../Images/offersNearYou.webp';
import topPicks from '../Images/topPicks.webp';
import whatsNew from '../Images/whatsNew.webp';
import vegeterianOption from '../Images/vegeterianOption.webp';
import seeAll from '../Images/seeAll.webp';
import Restuarant from '../components/Restuarant';
import belgianWaffle from '../Images/belgianWaffle.jpeg';
import globalPunjab from '../Images/globalPunjab.jpeg';
import aufsieHot from '../Images/aufsieHot.jpeg';
import vegCulture from '../Images/vegCulture.jpeg';
import roofTop from '../Images/roofTop.jpeg';
import Zaza21 from '../Images/Zaza21.jpeg';
import naturalIceCream from '../Images/naturalIceCream.jpeg';
import subway from '../Images/subway.jpeg';
import mcDonalds from '../Images/mcDonalds.jpeg';
import barista from '../Images/barista.jpeg';
import sweetTruth from '../Images/sweetTruth.jpeg';
import baskinRobbins from '../Images/baskinRobbins.jpeg';
import lunchBox from '../Images/lunchBox.jpeg';
import globoIceCream from '../Images/globoIceCream.jpeg';
// import favicon from '../Images/favicon.png';

import burgerSmasher from '../Images/burgerSmasher.jpeg';
import rollsDuniya from '../Images/rollsDuniya.jpeg';
import umiya from '../Images/umiya.jpeg';
import indianChinese from '../Images/indianChinese.jpeg';
import hydrabadiBiryani from '../Images/hydrabadiBiryani.jpeg';
import amalgam from '../Images/amalgam.jpeg';
import panda from '../Images/panda.jpeg';

import navratriMeals from '../Images/navratriMeals.jpeg';
import parathaHouse from '../Images/parathaHouse.jpeg';
import chillOut from '../Images/chillOut.jpeg';
import queenPlate from '../Images/queenPlate.jpeg';
import badshah from '../Images/badshah.jpeg';
import aadd from '../Images/aadd.jpeg';
import garden from '../Images/garden.jpeg';
import dosaPoint from '../Images/dosaPoint.jpeg';


import Scrollspy from 'react-scrollspy';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { useStateValue } from '../StateProvider';
import { db } from '../firebase';

const vegetarianOptionsData = [
    { key: 0, image: navratriMeals, restaurantName: "Navratri Meals", foodDetails: "North Indian, Desserts, Biryani", rating: "4.2", time: "31 MINS", people: "₹400 FOR TWO", coupen: "40% off | Use TRYNEW" },
    { key: 1, image: parathaHouse, restaurantName: "Paratha House", foodDetails: "North Indian, Punjabi, Indian", rating: "4.1", time: "40 MINS", people: "₹300 FOR TWO", coupen: "20% off | Use JUMBO" },
    { key: 2, image: chillOut, restaurantName: "Chill Out", foodDetails: "Fast Food, Street Food, Beverages", rating: "4.4", time: "61 MINS", people: "₹250 FOR TWO", coupen: "10% off | Use PARTY" },
    { key: 3, image: queenPlate, restaurantName: "The Queen's Plate", foodDetails: "Indian, Rajasthani", rating: "--", time: "50 MINS", people: "₹100 FOR TWO", coupen: "20% off | Use JUMBO" },
    { key: 4, image: badshah, restaurantName: "Badshah", foodDetails: "Fast Food, North Indian, South Indian, chinese, Desserts", rating: "--", time: "38 MINS", people: "₹250 FOR TWO", coupen: "" },
    { key: 5, image: aadd, restaurantName: "AADD (M) AADD (B)", foodDetails: "Cafe Beverage Desserts", rating: "--", time: "34 MINS", people: "₹500 FOR TWO", coupen: "40% off | Use TRYNEW" },
    { key: 6, image: garden, restaurantName: "Garden(Pure Veg)", foodDetails: "Indian", rating: "3.8", time: "40 MINS", people: "₹320 FOR TWO", coupen: "" },
    { key: 7, image: dosaPoint, restaurantName: "Dosa Point", foodDetails: "South Indian", rating: "4.8", time: "40 MINS", people: "₹320 FOR TWO", coupen: "20% off | Use TRYNEW" }
];



const whatsNewData = [
    { key: 0, image: burgerSmasher, restaurantName: "Burger Smasher", foodDetails: "American, Fast Food", rating: "3.8", time: "50 MINS", people: "₹400 FOR TWO", coupen: "10% off | Use TRYNEW" },
    { key: 1, image: rollsDuniya, restaurantName: "Rolls Duniya", foodDetails: "Indian", rating: "4.3", time: "58 MINS", people: "₹300 FOR TWO", coupen: "20% off | Use JUMBO" },
    { key: 2, image: indianChinese, restaurantName: "Indian Chinese", foodDetails: "Chinese, North Indian, Beverages", rating: "--", time: "61 MINS", people: "₹250 FOR TWO", coupen: "10% off | Use PARTY" },
    { key: 3, image: umiya, restaurantName: "Umiya", foodDetails: "Umiya Kutchi Dabeli", rating: "4.2", time: "50 MINS", people: "₹100 FOR TWO", coupen: "30% off | Use TRYNEW" },
    { key: 4, image: hydrabadiBiryani, restaurantName: "Hydrabadi Biryani", foodDetails: "Biryani", rating: "--", time: "38 MINS", people: "₹250 FOR TWO", coupen: "20% off | Use JUMBO" },
    { key: 5, image: amalgam, restaurantName: "Amalgam", foodDetails: "Continental, Italian, Bakery, Pan-Asian, Oriental", rating: "4.0", time: "34 MINS", people: "₹500 FOR TWO", coupen: "40% off | Use TRYNEW" },
    { key: 6, image: panda, restaurantName: "Panda XPRS", foodDetails: "Chinese", rating: "4.0", time: "40 MINS", people: "₹320 FOR TWO", coupen: "20% off | Use TRYNEW" }
];



const offersNearYouData = [
    { key: 0,id: 0, image: belgianWaffle, restaurantName: "Belgian Waffle", foodDetails: "Desert, Bakery, Beverages", rating: "4.2", time: "44 MINS", people: "₹250 FOR TWO", coupen: "60% off | Use TRYNEW" },
    { key: 1,id: 1, image: globalPunjab, restaurantName: "Global Punjab", foodDetails: "North Indian, Mughlai, Tandoor, Chinese", rating: "4.2", time: "45 MINS", people: "500 FOR TWO", coupen: "50% off | Use TRYNEW" },
    { key: 2,id: 2, image: aufsieHot, restaurantName: "Aufside @ Hotfut", foodDetails: "North Indian, Continental, American, Fast Food, Chinese, Pizzas, Desserts", rating: "4.3", time: "57 MINS", people: "₹400 FOR TWO", coupen: "50% off | Use TRYNEW" },
    { key: 3,id: 3, image: vegCulture, restaurantName: "Veg Culture", foodDetails: "North Indian, Continental, Italian, Mexican, Lebanese", rating: "--", time: "56 MINS", people: "₹400 FOR TWO", coupen: "50% off on all orders" },
    { key: 4,id: 4, image: roofTop, restaurantName: "The Rooftop Project", foodDetails: "North Indian, Chinese, Mughlai, Asian", rating: "--", time: "49 MINS", people: "₹600 FOR TWO", coupen: "20% off | Use JUMBO" },
    { key: 5,id: 5, image: Zaza21, restaurantName: "ZAZA 21 Spice Biryani", foodDetails: "North Indian, Biryani, Fast Food, Combo, Snacks", rating: "4.3", time: "45 MINS", people: "₹250 FOR TWO", coupen: "60% off | Use STEALDEAL" },
    { key: 6,id: 6, image: naturalIceCream, restaurantName: "Natural Ice Cream", foodDetails: "Ice Cream", rating: "4.7", time: "28 MINS", people: "₹150 FOR TWO", coupen: "30% off | Use TRYNEW" }
];

const topPicksData = [
    { key: 0, image: subway, restaurantName: "Subway", foodDetails: "Fast Food, Healthy Food, Salads, Snacks, Desserts, Beverages", rating: "4.3", time: "35 MINS", people: "₹350 FOR TWO", coupen: "20% off | Use TRYNEW" },
    { key: 1, image: mcDonalds, restaurantName: "McDonalds's", foodDetails: "American, Fast Food", rating: "4.3", time: "34 MINS", people: "₹400 FOR TWO", coupen: "" },
    { key: 2, image: barista, restaurantName: "Barista", foodDetails: "Beverages, Snacks, Desserts, Cafe", rating: "4.0", time: "32 MINS", people: "₹350 FOR TWO", coupen: "40% off | Use TRYNEW" },
    { key: 3, image: sweetTruth, restaurantName: "Sweet Truth", foodDetails: "Bakery, Desserts, Beverages", rating: "4.4", time: "30 MINS", people: "₹450 FOR TWO", coupen: "20% off | Use PARTY" },
    { key: 4, image: baskinRobbins, restaurantName: "Baskin Robbins", foodDetails: "Desserts", rating: "4.3", time: "33 MINS", people: "₹200 FOR TWO", coupen: "10% off | Use PARTY" },
    { key: 5, image: lunchBox, restaurantName: "Lunch Box", foodDetails: "North Indian, Punjabi, Combo, Biryani, Jain, Indian, Mughlai, Desserts", rating: "4.2", time: "34 MINS", people: "₹200 FOR TWO", coupen: "40% off | Use TRYNEW" },
    { key: 6, image: globoIceCream, restaurantName: "GLOBO Ice Creams Of The World", foodDetails: "North Indian, Biryani, Fast Food, Combo, Snacks", rating: "--", time: "40 MINS", people: "₹120 FOR TWO", coupen: "60% off | Use STEALDEAL" }
];





const OfferRestuarants = () => { 
    const [{ RestuarantInfo,user}, dispatch] = useStateValue();

    

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
      console.log(RestuarantInfo);

    return (
        <>
            <div className="Section-1">
                <div className="Offers">
                    <div className="Offer__Sidebar">
                        <Scrollspy
                            items={['ony', 'tp', 'wn', 'vo', 'sa']}
                            currentClassName="activeHighlight" >
                                
                            <li>
                                <a href="#ony">
                                    <div className="Offers_Near_You">
                                        <img
                                            className="Offer__img"
                                            src={offersNearYou}
                                        alt="img"/>
                                        <div id="a1" className="Offer__div">
                                            <div>Offers Near You</div>
                                            <p>7 OPTIONS</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#tp">
                                    <div className="Top_Picks">
                                        <img
                                            className="Offer__img"
                                            src={topPicks}
                                            alt="img"/>
                                        <div id="a1" className="Offer__div">
                                            <div>Top Picks</div>
                                            <p>7 OPTIONS</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#wn">
                                    <div className="Whats_New">
                                        <img
                                            className="Offer__img"
                                            src={whatsNew}
                                            alt="img"/>
                                        <div id="a1" className="Offer__div">
                                            <div>What's New</div>
                                            <p>7 OPTIONS</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#vo">
                                    <div className="Vegeterian_Options">
                                        <img
                                            className="Offer__img"
                                            src={vegeterianOption}
                                            alt="img"/>
                                        
                                        <div id="a1" className="Offer__div">
                                            <div>Vegeterian Options</div>
                                            <p>8 OPTIONS</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#sa">
                                    <div className="See_All">
                                        <img
                                            className="Offer__img"
                                            src={seeAll}
                                            alt="img"/>
                                        <div id="a1" className="Offer__div">
                                            <div>SEE ALL</div>
                                            <p>29 OPTIONS</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </Scrollspy>
                    </div>
                    <div className="Section_Offer_Restuarants">
                        <div id="ony">
                            <div className="Section_Offers_Near_You">Offers Near You</div>
                            <div className="Resturants">

                                {/* {offersNearYouData.map((d) => (
                                    <Restuarant
                                        key={d.key}
                                        id={d.id}
                                        image={d.image}
                                        restaurantName={d.restaurantName}
                                        foodDetails={d.foodDetails}
                                        rating={d.rating}
                                        time={d.time}
                                        people={d.people}
                                        coupen={d.coupen}
                                        />
                                ))} */}

                                {RestuarantInfo.filter(item1 => (item1.RestuarantInfo.tag==="Offers near you")).map((item) => (
                                    <Restuarant
                                        key={item.id}
                                        id={item.id}
                                        image={item.RestuarantInfo.imageUrl}
                                        restaurantName={item.RestuarantInfo.name}
                                        foodDetails={item.RestuarantInfo.cuisine}
                                        rating={item.RestuarantInfo.rating}
                                        time={item.RestuarantInfo.deliveryTime}
                                        people={item.RestuarantInfo.serving}
                                        coupen={item.RestuarantInfo.offer}
                                        />
                                ))}

                            </div>
                        </div>
                        <hr className="Section__Inbetween__hr" />
                        <div  id="tp">
                            <div className="Section_Top_Picks">Top Picks</div>
                            <div className="Resturants">

                                {/* {topPicksData.map((d) => (
                                    
                                        <Restuarant
                                            key={d.key}
                                            image={d.image}
                                            restaurantName={d.restaurantName}
                                            foodDetails={d.foodDetails}
                                            rating={d.rating}
                                            time={d.time}
                                            people={d.people}
                                            coupen={d.coupen}
                                        />
                                
                                ))} */}
                                {RestuarantInfo.filter(item1 => (item1.RestuarantInfo.tag==="Top picks")).map((item) => (
                                    <Restuarant
                                        key={item.id}
                                        id={item.id}
                                        image={item.RestuarantInfo.imageUrl}
                                        restaurantName={item.RestuarantInfo.name}
                                        foodDetails={item.RestuarantInfo.cuisine}
                                        rating={item.RestuarantInfo.rating}
                                        time={item.RestuarantInfo.deliveryTime}
                                        people={item.RestuarantInfo.serving}
                                        coupen={item.RestuarantInfo.offer}
                                        />
                                ))}
                            </div>
                        </div>
                        <hr className="Section__Inbetween__hr" />
                        <div id="wn" >
                            <div className="Section_Whats_New">What's New</div>
                            <div className="Resturants">

                                {/* {whatsNewData.map((d) => (
                                    <Restuarant
                                        key={d.key}
                                        image={d.image}
                                        restaurantName={d.restaurantName}
                                        foodDetails={d.foodDetails}
                                        rating={d.rating}
                                        time={d.time}
                                        people={d.people}
                                        coupen={d.coupen}
                                    />
                                ))} */}
                                {RestuarantInfo.filter(item1 => (item1.RestuarantInfo.tag==="Whats new")).map((item) => (
                                    <Restuarant
                                        key={item.id}
                                        id={item.id}
                                        image={item.RestuarantInfo.imageUrl}
                                        restaurantName={item.RestuarantInfo.name}
                                        foodDetails={item.RestuarantInfo.cuisine}
                                        rating={item.RestuarantInfo.rating}
                                        time={item.RestuarantInfo.deliveryTime}
                                        people={item.RestuarantInfo.serving}
                                        coupen={item.RestuarantInfo.offer}
                                        />
                                ))}
                            </div>
                        </div>
                        <hr className="Section__Inbetween__hr" />
                        <div id="vo" >
                            <div className="Section_Whats_New">Vegetarian Options</div>
                            <div className="Resturants">

                                {/* {vegetarianOptionsData.map((d) => (
                                    <Restuarant
                                        key={d.key}
                                        image={d.image}
                                        restaurantName={d.restaurantName}
                                        foodDetails={d.foodDetails}
                                        rating={d.rating}
                                        time={d.time}
                                        people={d.people}
                                        coupen={d.coupen}
                                    />
                                ))} */}
                                {RestuarantInfo.filter(item1 => (item1.RestuarantInfo.tag==="Vegetarian options")).map((item) => (
                                    <Restuarant
                                        key={item.id}
                                        id={item.id}
                                        image={item.RestuarantInfo.imageUrl}
                                        restaurantName={item.RestuarantInfo.name}
                                        foodDetails={item.RestuarantInfo.cuisine}
                                        rating={item.RestuarantInfo.rating}
                                        time={item.RestuarantInfo.deliveryTime}
                                        people={item.RestuarantInfo.serving}
                                        coupen={item.RestuarantInfo.offer}
                                        />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="Section-2">
                <div id="sa" className="heading">
                    <ArrowDownwardIcon style={{ fontSize: "40px", marginRight: "10px", marginTop: "-2.5px" }} />
                    <div>ALL RESTAURANTS</div>
                </div>

                <div className="section-2-restaurants-main">
                    <div className="section-2-restaurants">
                        {/* {offersNearYouData.map((d) => (
                                        <Restuarant
                                            key={d.key}
                                            image={d.image}
                                            restaurantName={d.restaurantName}
                                            foodDetails={d.foodDetails}
                                            rating={d.rating}
                                            time={d.time}
                                            people={d.people}
                                            coupen={d.coupen}
                                        />
                        ))} */}
                        
                        {RestuarantInfo.map((item) => (
                                    <Restuarant
                                        key={item.id}
                                        id={item.id}
                                        image={item.RestuarantInfo.imageUrl}
                                        restaurantName={item.RestuarantInfo.name}
                                        foodDetails={item.RestuarantInfo.cuisine}
                                        rating={item.RestuarantInfo.rating}
                                        time={item.RestuarantInfo.deliveryTime}
                                        people={item.RestuarantInfo.serving}
                                        coupen={item.RestuarantInfo.offer}
                                        />
                                ))}





                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferRestuarants;