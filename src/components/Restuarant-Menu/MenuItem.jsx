import React,{useState, useEffect} from 'react';
import {useStateValue} from '../../StateProvider';
import { Link,useParams } from 'react-router-dom';
import './MenuItem.css';
import VegIcon from '../../Images/VegIcon.png';
import NonVegIcon from '../../Images/NonVegIcon.png';
import { db } from '../../firebase';
import { Remove } from '@material-ui/icons';

const MenuItem = (props) => {
    let { id } = useParams();
    const [isLogged, setIsLogged] = useState(false);
    const [{ Order, user }, dispatch] = useStateValue();
    const [menuCollectionName, setMenuCollectionName] = useState();
    
    const [DishId, setDishId] = useState("");
    const [DishCount, setDishCount] = useState(0);
    const [dishInOrder, setDishInOrder] = useState(false);  // need to use inside useEffect and it cannot
    // be used inside a callback so it needs to be defined outside callback.

    // code to fetch the dishId and store it in DishId variable
    useEffect(() => {
        let relatedTerm;
        db.collection("RestuarantInfo").doc(id).collection(props.menuCollectionName)
            .get().then((menuCollectionName) => {
        
                menuCollectionName.docs.forEach(doc => {
                    relatedTerm = { id: doc.id, ...doc.data() }
                    if (relatedTerm.Menu === props.Menu) {
                        setDishId(relatedTerm.id); // Setting Id of current dish on which user has clicked on it
                        Order.map((dish) => (
                            dish.id === DishId && setDishCount(dish.Count)
                        ));
                    }
                })
            })
        console.log("trigger");
    })

    useEffect(() => {
        console.log(Order);
        // setting dishCount to 0 because when dishCount=1 and - button is click to decrease the quantity
        // of dish than when Order array is iterated(see below) than dishId is not present so the condition in map(see below)
        // does not satisfy even once and the value of dishCount remain 1.
        setDishCount(0);
        Order.map((dish) => (
            dish.id === DishId && setDishCount(dish.Count)
        ));
        // console.log("Trigger");
    }, [Order]);
    

    
    
    
    const add = () => { 
        let relatedTerm;
        db.collection("RestuarantInfo").doc(id).collection(props.menuCollectionName)
            .get().then((menuCollectionName) => {
            
        // menuCollections stands for the sidebar item (eg. Recommended, Indian Bread, Main Course, etc ). This are subcollection
        // and a sidebar item in which that particular dish which is clicked is iterated.
        menuCollectionName.docs.forEach(doc => {
            relatedTerm = { id: doc.id, ...doc.data() }
            if (relatedTerm.Menu === props.Menu)
            {
                setDishId(relatedTerm.id); // Setting Id of current dish on which user has clicked on
                console.log(relatedTerm.id,Order);

                // Adding the a dish which is clicked on to the Order array in reduce.js
                dispatch({
                    type: "ADD_ITEM_IN_ORDER",
                    item: {
                    id: relatedTerm.id,
                    menuCollectionName:props.menuCollectionName,    
                    VegNonV: props.VegNonV,
                    Menu: props.Menu,
                    Price: props.Price,
                    Count: 1,
                    // RestuarantId: props.restuarantId
                    }
                });
                console.log(Order);
            }
        })  
        // console.log("Trigger1");
        })
    };
    const remove = () => { 
        let relatedTerm;
        db.collection("RestuarantInfo").doc(id).collection(props.menuCollectionName)
            .get().then((menuCollectionName) => {
            
        // menuCollections stands for the sidebar item (eg. Recommended, Indian Bread, Main Course, etc ). This are subcollection
        // and a sidebar item in which that particular dish which is clicked is iterated.
        menuCollectionName.docs.forEach(doc => {
            relatedTerm = { id: doc.id, ...doc.data() }
            if (relatedTerm.Menu === props.Menu)
            {
                setDishId(relatedTerm.id); // Setting Id of current dish on which user has clicked on
                console.log("Remove");

                // Adding the a dish which is clicked on to the Order array in reduce.js
                dispatch({
                    type: "REMOVE_ITEM_FROM_ORDER",
                    item: {
                        id: relatedTerm.id,
                        restuarantId: props.restuarantId
                    }
                });
                console.log(Order);
            }
        })  
        })
    };

    useEffect(() => {
        if (user === null)
          setIsLogged(false);
        else
          setIsLogged(true);
    }, [user]);
    
    return (
        <>
            {props.VegNonV === "Veg" ?
                <img className="MenuItem_Veg_NonVeg" src={VegIcon} />
                :
                <img className="MenuItem_Veg_NonVeg" src={NonVegIcon} />
            }
            <div className="MenuItem_Info">
                <span>
                    <div className="MenuItem_MenuName">{props.Menu}</div>
                    <div className="MenuItem_Price">₹{props.Price}</div>
                </span>
                {isLogged ? 
                     DishCount>0 ?
                        <div className="MenuItem_Add_Button" >
                            <div className="MenuItem_minus" onClick={remove}>−</div>
                                <span>{DishCount}</span>
                                <div className="MenuItem_plus" onClick={add}>+</div>
                        </div>
                    :
                        <div className="MenuItem_Add_Button" onClick={add}>
                            <span></span>
                            <span>ADD</span>
                            <span></span>
                        </div>
                    
                :
                <Link to="/SignIn">
                    <div className="MenuItem_Add_Button" >
                            <span></span>
                            <span>ADD</span>
                            <span></span>
                    </div>
                  </Link>
                }
                </div>
        </>
    );
};

export default MenuItem;