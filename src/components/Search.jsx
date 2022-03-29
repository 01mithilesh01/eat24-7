import React,{ useState, useEffect } from 'react';
import './Search.css';
// import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SearchRoundedIcon from '../Images/search.png';
import Close from '../Images/close1.png';
import { Link } from 'react-router-dom';
import DisplaySearchRestuarant from './DisplaySearchRestuarant';


import burgerSmasher from '../Images/burgerSmasher.jpeg';
import rollsDuniya from '../Images/rollsDuniya.jpeg';
import umiya from '../Images/umiya.jpeg';
import indianChinese from '../Images/indianChinese.jpeg';
import hydrabadiBiryani from '../Images/hydrabadiBiryani.jpeg';
import amalgam from '../Images/amalgam.jpeg';
import panda from '../Images/panda.jpeg';
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
import navratriMeals from '../Images/navratriMeals.jpeg';
import parathaHouse from '../Images/parathaHouse.jpeg';
import chillOut from '../Images/chillOut.jpeg';
import queenPlate from '../Images/queenPlate.jpeg';
import badshah from '../Images/badshah.jpeg';
import aadd from '../Images/aadd.jpeg';
import garden from '../Images/garden.jpeg';
import dosaPoint from '../Images/dosaPoint.jpeg';
import { useStateValue } from '../StateProvider';
import { db } from '../firebase';

const Search = () => {

    const Restuarants = [
        { key: 0, image: burgerSmasher, restaurantName: "Burger Smasher", foodDetails: "American, Fast Food", rating: "3.8", time: "50 MINS", people: "₹400 FOR TWO", coupen: "10% off | Use TRYNEW" },
        { key: 1, image: rollsDuniya, restaurantName: "Rolls Duniya", foodDetails: "Indian", rating: "4.3", time: "58 MINS", people: "300 FOR TWO", coupen: "20% off | Use JUMBO" },
        { key: 2, image: indianChinese, restaurantName: "Indian Chinese", foodDetails: "Chinese, North Indian, Beverages", rating: "--", time: "61 MINS", people: "₹250 FOR TWO", coupen: "10% off | Use PARTY" },
        { key: 3, image: umiya, restaurantName: "Umiya", foodDetails: "Umiya Kutchi Dabeli", rating: "4.2", time: "50 MINS", people: "₹100 FOR TWO", coupen: "30% off | Use TRYNEW" },
        { key: 4, image: hydrabadiBiryani, restaurantName: "Hydrabadi Biryani", foodDetails: "Biryani", rating: "--", time: "38 MINS", people: "₹250 FOR TWO", coupen: "20% off | Use JUMBO" },
        { key: 5, image: amalgam, restaurantName: "Amalgam", foodDetails: "Continental, Italian, Bakery, Pan-Asian, Oriental", rating: "4.0", time: "34 MINS", people: "₹500 FOR TWO", coupen: "40% off | Use TRYNEW" },
        { key: 6, image: panda, restaurantName: "Panda XPRS", foodDetails: "Chinese", rating: "4.0", time: "40 MINS", people: "₹320 FOR TWO", coupen: "20% off | Use TRYNEW" },
        { key: 7, image: belgianWaffle, restaurantName: "Belgian Waffle", foodDetails: "Desert, Bakery, Beverages", rating: "4.2", time: "44 MINS", people: "₹250 FOR TWO", coupen: "60% off | Use TRYNEW" },
        { key: 8, image: globalPunjab, restaurantName: "Global Punjab", foodDetails: "North Indian, Mughlai, Tandoor, Chinese", rating: "4.2", time: "45 MINS", people: "500 FOR TWO", coupen: "50% off | Use TRYNEW" },
        { key: 9, image: aufsieHot, restaurantName: "Aufside @ Hotfut", foodDetails: "North Indian, Continental, American, Fast Food, Chinese, Pizzas, Desserts", rating: "4.3", time: "57 MINS", people: "₹400 FOR TWO", coupen: "50% off | Use TRYNEW" },
        { key: 10, image: vegCulture, restaurantName: "Veg Culture", foodDetails: "North Indian, Continental, Italian, Mexican, Lebanese", rating: "--", time: "56 MINS", people: "₹400 FOR TWO", coupen: "50% off on all orders" },
        { key: 11, image: roofTop, restaurantName: "The Rooftop Project", foodDetails: "North Indian, Chinese, Mughlai, Asian", rating: "--", time: "49 MINS", people: "₹600 FOR TWO", coupen: "20% off | Use JUMBO" },
        { key: 12, image: Zaza21, restaurantName: "ZAZA 21 Spice Biryani", foodDetails: "North Indian, Biryani, Fast Food, Combo, Snacks", rating: "4.3", time: "45 MINS", people: "₹250 FOR TWO", coupen: "60% off | Use STEALDEAL" },
        { key: 13, image: naturalIceCream, restaurantName: "Natural Ice Cream", foodDetails: "Ice Cream", rating: "4.7", time: "28 MINS", people: "₹150 FOR TWO", coupen: "30% off | Use TRYNEW" },
        { key: 14, image: subway, restaurantName: "Subway", foodDetails: "Fast Food, Healthy Food, Salads, Snacks, Desserts, Beverages", rating: "4.3", time: "35 MINS", people: "₹350 FOR TWO", coupen: "20% off | Use TRYNEW" },
        { key: 15, image: mcDonalds, restaurantName: "McDonalds's", foodDetails: "American, Fast Food", rating: "4.3", time: "34 MINS", people: "400 FOR TWO", coupen: "" },
        { key: 16, image: barista, restaurantName: "Barista", foodDetails: "Beverages, Snacks, Desserts, Cafe", rating: "4.0", time: "32 MINS", people: "₹350 FOR TWO", coupen: "40% off | Use TRYNEW" },
        { key: 17, image: sweetTruth, restaurantName: "Sweet Truth", foodDetails: "Bakery, Desserts, Beverages", rating: "4.4", time: "30 MINS", people: "₹450 FOR TWO", coupen: "20% off | Use PARTY" },
        { key: 18, image: baskinRobbins, restaurantName: "Baskin Robbins", foodDetails: "Desserts", rating: "4.3", time: "33 MINS", people: "₹200 FOR TWO", coupen: "10% off | Use PARTY" },
        { key: 19, image: lunchBox, restaurantName: "Lunch Box", foodDetails: "North Indian, Pumjabi, Combo, Biryani, Jain, Indian, Mughlai, Desserts", rating: "4.2", time: "34 MINS", people: "₹200 FOR TWO", coupen: "40% off | Use TRYNEW" },
        { key: 20, image: globoIceCream, restaurantName: "GLOBO Ice Creams Of The World", foodDetails: "North Indian, Biryani, Fast Food, Combo, Snacks", rating: "--", time: "40 MINS", people: "₹120 FOR TWO", coupen: "60% off | Use STEALDEAL" },
        { key: 21, image: navratriMeals, restaurantName: "Navratri Meals", foodDetails: "North Indian, Desserts, Biryani", rating: "4.2", time: "31 MINS", people: "₹400 FOR TWO", coupen: "40% off | Use TRYNEW" },
        { key: 22, image: parathaHouse, restaurantName: "Paratha House", foodDetails: "North Indian, Punjabi, Indian", rating: "4.1", time: "40 MINS", people: "300 FOR TWO", coupen: "20% off | Use JUMBO" },
        { key: 23, image: chillOut, restaurantName: "Chill Out", foodDetails: "Fast Food, Street Food, Beverages", rating: "4.4", time: "61 MINS", people: "₹250 FOR TWO", coupen: "10% off | Use PARTY" },
        { key: 24, image: queenPlate, restaurantName: "The Queen's Plate", foodDetails: "Indian, Rajasthani", rating: "--", time: "50 MINS", people: "₹100 FOR TWO", coupen: "20% off | Use JUMBO" },
        { key: 25, image: badshah, restaurantName: "Badshah", foodDetails: "Fast Food, North Indian, South Indian, chinese, Desserts", rating: "--", time: "38 MINS", people: "₹250 FOR TWO", coupen: "" },
        { key: 26, image: aadd, restaurantName: "AADD (M) AADD (B)", foodDetails: "Cafe Beverage Desserts", rating: "--", time: "34 MINS", people: "₹500 FOR TWO", coupen: "40% off | Use TRYNEW" },
        { key: 27, image: garden, restaurantName: "Garden(Pure Veg)", foodDetails: "Indian", rating: "3.8", time: "40 MINS", people: "₹320 FOR TWO", coupen: "" },
        { key: 28, image: dosaPoint, restaurantName: "Dosa Point)", foodDetails: "South Indian", rating: "4.8", time: "40 MINS", people: "₹320 FOR TWO", coupen: "20% off | Use TRYNEW" }

    ];

    const [{ RestuarantInfo}, dispatch] = useStateValue();
    
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

    // const Resturants = ['Begian Waffle', 'Mc Donalds', 'Dominos', "Behrouz Biryani"];
    const [displayRestuarant, setDisplayRestuarant] = useState([]);
    // const [InputRestuarantName, setInputRetuarantName] = useState("");
    var arr = [];
    const searchRestuarant = (event) => {
        // console.log(event.target.value);

        const InputRestuarantName = event.target.value;
        // setInputRetuarantName(InputRestuarantName);
        arr = [];
        setDisplayRestuarant([]);
        // for (let i = 0; i < Restuarants.length; i++) {
        //     if (((Restuarants[i].restaurantName).substring(0, (InputRestuarantName).length)).toLowerCase() == (InputRestuarantName).toLowerCase()) {
        //         console.log("In");
        //         arr.push(Restuarants[i]);
        //         setDisplayRestuarant(arr);
        //     }
        // }
        for(let i = 0; i < RestuarantInfo.length && InputRestuarantName.length>0; i++){
            if (((RestuarantInfo[i].RestuarantInfo.name).substring(0, (InputRestuarantName).length)).toLowerCase() == (InputRestuarantName).toLowerCase()) {
                console.log(RestuarantInfo[i]);
                arr.push(RestuarantInfo[i]);
                setDisplayRestuarant(arr);
            }
        }
        console.log(RestuarantInfo);
        // Adding this condition because when the user type the name of the resturant in the search box
        // and than if the user hits backspace till there is nothing left in the search box than the if
        // condition inside the of loop will become true because in that case event.target.value would be
        // equal to "" and subtrings of all the resturants would be "". Due to which all the resturant name
        // would be appended into arr and which will result in displaying all the the resturant below the 
        // search box.
        if (event.target.value == "")
            setDisplayRestuarant([]);
        console.log(arr);
    };

    // const clearSearchBar = () => { 
    //     setInputRetuarantName("");
    //     setDisplayRestuarant([]);
    //     arr = [];
    // };
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          alert('enter press here! ')
        }
      }
    return (
        <div className="Section_Search">
            <div className="Search_Box">
                <img className="searchIcon" src={SearchRoundedIcon}></img>
                {/* <SearchRoundedIcon className="searchIcon"/> */}
                <input placeholder="Search For Resturants" onChange={searchRestuarant}
                    // name={InputRestuarantName}
                ></input>
                {/* {
                    (InputRestuarantName!== "") &&
                    <a className="clear_Search_Link" onClick={clearSearchBar} >CLEAR</a>
                } */}
                
                <Link to="/">
                    <div className="closeIcon" >
                        <img className="closeIconImage" src={Close} />
                        <div className="esc">EXIT</div>
                    </div>
                </Link>
            </div>
            { displayRestuarant.length !== 0 &&
                < div className="Display_Search_Restuarant">
                    {displayRestuarant.map((d) => (
                        <DisplaySearchRestuarant
                            key={d.id}
                            id={d.id}
                            img={d.RestuarantInfo.imageUrl}
                            name={d.RestuarantInfo.name}
                        />
                    ))}
                </div>
            }
            
        </div>
    );
};

export default Search;