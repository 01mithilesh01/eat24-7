import React,{useEffect, useState} from 'react';
import './Cart.css';
import { useStateValue } from '../../StateProvider';
import CartMenu from './CartMenu';
import discountGrey from '../../Images/discountGrey.png';
import locationPlus from '../../Images/locationPlus.png';
import mapImage from '../../Images/mapImage.png';
import close from '../../Images/close.png';
import CoupenImage from '../../Images/CoupenImage.png';
import { storage, db } from "../../firebase";
import { auth } from "../../firebase";
import CartEmpty from '../../Images/CartEmpty.png';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

const Cart = () => { 

    const [{ RestuarantInfo, CurrentRestuarantId, UserAddressArray, user, userName, userUID, Order }, dispatch] = useStateValue();
    const [itemTotal, setItemTotal] = useState(0);
    // const [deliveryFee, setDeliveryFee] = useState("");
    const [isOpenCoupenCard, setIsOpenCoupenCard] = useState(false);
    const [isOpenAddressCard, setisOpenAddressCard] = useState(false);
    const [AddressArray, setAddressArray] = useState([]);
    const [userUIDNew, setUserUIDNew] = useState("0");
    const [addressSelected, setAddressSelected] = useState(false);
    const [addressWhichUserSelected, setAddressWhichUserSelected] = useState({});
    const [AddressDetails, setAddressDetails] = useState({
        FlatNumber: "",
        BuildingName: "",
        StreetName: "",
        CityName: "",
        StateName: "",
        Pincode: "",
    });
    const { FlatNumber, BuildingName, StreetName, CityName, StateName, Pincode } = AddressDetails;
    const handelChange = (e) => { 
        let { name, value } = e.target;
        setAddressDetails({ ...AddressDetails, [name]: value });
    };

    const AddressCardClose = () => { 
        if (isOpenAddressCard) {
            document.body.classList.remove('body');
            setisOpenAddressCard(false);
        }
    };
    const AddressCardOpen = () => { 
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
        document.body.classList.add('body');
        setisOpenAddressCard(true);
    };

    const CoupenCardClose = () => { 
        if (isOpenCoupenCard) {
            document.body.classList.remove('body');
            setIsOpenCoupenCard(false);
        }
    };
    const CoupenCardOpen = () => { 
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
        document.body.classList.add('body');
        setIsOpenCoupenCard(true);
    };

    useEffect(() => { 
        setItemTotal(0);
        let total = 0;
        Order.map((item) => {
            total += (item.Count * item.Price)
            // setItemTotal(itemTotal+);
        });
        setItemTotal(total);
    }, [Order]);


    let details = [];

    let displayRestuarant = RestuarantInfo.filter((item) => {
        return item.id === CurrentRestuarantId;
    });
    
    displayRestuarant.map((item) => (
        details = item.RestuarantInfo
    ))
    let deliveryFee = 0;
    console.log();
    displayRestuarant.map((item) => (
        deliveryFee = Math.round(parseInt(item.RestuarantInfo.deliveryTime.split(" ")[0]) / 2)
    ))
    let Coupen = "";
    displayRestuarant.map((item) => (
        Coupen = (item.RestuarantInfo.offer).split(" ")[(item.RestuarantInfo.offer).split(" ").length-1]
    ))

    let Offer = "";
    displayRestuarant.map((item) => (
        Offer = item.RestuarantInfo.offer.split("|")[0]
    ))

    useEffect(() => (
        console.log("Order Changed",Order)
    ),[Order]);

    
    const AddNewAddress = (event) => { 
        event.preventDefault();
        if (FlatNumber === "" || BuildingName === "" || StreetName === "" || CityName === "" || StateName === "" || Pincode === "") {
            setAddressDetails({
                FlatNumber: "",
                BuildingName: "",
                StreetName: "",
                CityName: "",
                StateName: "",
                Pincode: "",
            });
            alert("Fill all the fields");
        }
        else {
            
            console.log(userUID);

            db.collection("UserAddresses").doc(userUIDNew).collection("Address").add({
                flatNumber: FlatNumber,
                buildingName: BuildingName,
                streetName: StreetName,
                cityName: CityName,
                stateName: StateName,
                pincode: Pincode,
            });
            AddressCardClose();
            setAddressDetails({
                FlatNumber: "",
                BuildingName: "",
                StreetName: "",
                CityName: "",
                StateName: "",
                Pincode: "",
            });
            console.log("address added");
        }
        console.log("submit");
    };
    
    useEffect(() => (
        setUserUIDNew(userUID)
    ),[userUID]);

    useState(() => (
        
        db.collection("UserAddresses")
            .doc(userUID)
            .collection("Address")
            .onSnapshot((snapshot) => {
                setAddressArray(snapshot.docs.map((doc) => doc.data()));
            })
    
    ));
    const confirmOrder = (event) => {
        event.preventDefault();
        const d=new Date();
        let day = d.getDay();
        let month = d.getMonth();
        let date = d.getDate();
        let year = d.getFullYear();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec'];
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;



        history.push("/Restuarant-Menu/OrderPlaced");
        db.collection("UserOrders").doc(userUID).collection("Orders").add({
            Order: Order,
            RestuarantId: CurrentRestuarantId,
            Address: addressWhichUserSelected, 
            orderNumber: parseInt(Math.random()*1000000000000),
            Bill: Math.round(itemTotal * 100 ) / 100 + deliveryFee + Math.round(deliveryFee*1.5) -discount,
            time: days[day]+', '+months[month]+' '+date+', '+year+', '+strTime,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch({
            type: "ORDER_PLACED",
            item: {
                RestuarantId: CurrentRestuarantId,
            }
        });

    };
    


    useEffect(() => {
        db.collection("UserAddresses").doc(userUID).collection("Address").onSnapshot((snapshot) => {
          dispatch({
            type: "UPDATE_USERADDRESSESARRAY",
            items: snapshot.docs.map((doc) => ({
              id: doc.id,
                UserAddressArray: doc.data(), // UserAddressArray is the array created in reducer.js file and 
                // all the information of all the restuarant is appended 
                //to that array.
            })),
          });
        });
      }, [dispatch]);

    
    const handleAddressClick = (item) => { 
        console.log(item.id);
        setAddressSelected(true);
        setAddressWhichUserSelected(item);
    };
    const [offerActivate1, setOfferActivate1] = useState(false);
    const [offerActivate2, setOfferActivate2] = useState(false);
    const [discount, setDiscount] = useState(0);
    const CoupenApplied1 = () => { 
        console.log("1");
        if (Offer !== "" && Math.round(itemTotal * 100) / 100>=149){
            setOfferActivate1(true);
            let d = Math.round(itemTotal * (parseInt(Offer.substring(0,2)))/100*100)/100;
            setDiscount(d);
            console.log(d);
            console.log(discount);
            if (d > 100)
                setDiscount(100);
            
        }
        else{
            setOfferActivate1(false);
            setDiscount(0);
        }
        CoupenCardClose();
    };
    
    const CoupenApplied2 = () => {
        console.log("2");
        if (Math.round(itemTotal * 100) / 100 >= 249) {
            setOfferActivate2(true);
            setDiscount(125);
            console.log(125);
        }
        else{
            setOfferActivate2(false);
            setDiscount(0);
        }
        CoupenCardClose();
    };
    useEffect(() => (
        changeDiscount()
    ));

    const changeDiscount = () => (
        offerActivate1 ? CoupenApplied1() : (offerActivate2 && CoupenApplied2())
    )
    const removeCoupen = () => {
        setOfferActivate1(false);
        setOfferActivate2(false);
        setDiscount(0);
     };
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    useEffect(() => (
        (Order.length===0) ? setIsCartEmpty(true) : setIsCartEmpty(false)
    ))
    const history = useHistory();
    const moveToHomePage = (e) => { 
        e.preventDefault();
        history.push(`/`);
    };



    return (
        <main >
            {isCartEmpty ?
                <section>
                    <div className='emptyCartSection'>
                        <img className='emptyCartImage' src={CartEmpty} />
                        <div className='cartMessage1'>Your cart is empty</div>
                        <div className='cartMessage2'>You can go to home page to view more restaurants</div>
                        <button onClick={moveToHomePage} className='moveToHomePage'>SEE RESTUARANT NEAR YOU</button>
                    </div>

                </section> :
                <>
        <section className='Cart_Section'>
            <div className="Ordered_Menu_Section_Cart">
                {(Order.length !== 0) &&
                    <>
                        <div className='Restuarant_Details_Cart'>
                            <img className='Restuarant_Image_Cart' src={details.imageUrl} />
                            <div className='Restuarant_Name_Cart'>{details.name} </div>
                        </div>
                        <div className='scroll'>
                            <div className='Ordered_Menu_Section_Cart_subsection'>
                                <div className='Order_Details_Cart'>
                                    {Order.map((item) => (
                                        <CartMenu
                                            key={item.id}
                                            id={item.id}
                                            Menu={item.Menu}
                                            Count={item.Count}
                                            Price={item.Price}
                                            VegNonV={item.VegNonV}
                                            menuCollectionName={item.menuCollectionName}
                                            restuarantId={CurrentRestuarantId}
                                        />
                                    ))}
                                </div> 
                                { (!offerActivate1 && !offerActivate2) && <div className='Restuarant_Coupen_Cart' onClick={CoupenCardOpen}>
                                    <img src={discountGrey} />
                                    <div className='Apply_Coupon'>Apply Coupon</div>
                                </div>}
                                { (offerActivate1 || offerActivate2) &&
                                    <div className='Restuarant_Applied_Coupen_Cart' >
                                        <div className='Applied_CoupenOnBill'>
                                            <div className='OfferAppliedToBill'>{offerActivate1 ? Coupen : "WIN 125"}</div>
                                            <div className='Offer_applied_on_bill'>Offer applied on the bill</div>
                                        </div>
                                        <div className='removeCoupen' onClick={removeCoupen}>REMOVE</div>
                                    </div>
                                }
                                
                                <div className='Bill_Details'>Bill Details</div>
                                <div className='Item_Total'>
                                    <div className='Item_Total_heading'>Item Total</div>
                                    <div className='Item_Total_Price'>₹{Math.round(itemTotal * 100) / 100}</div>
                                </div>
                                { (offerActivate1 || offerActivate2) &&
                                    <div className='Item_Total'>
                                        <div className='Item_Total_heading'>Discount</div>
                                        <div className='Item_Total_Price'>-₹{discount}</div>
                                    </div>
                                }
                                <div className='Delivery'>
                                    <div className='Delivery_heading'>Delivery Fee</div>
                                <div className='Delivery_fees'>₹{ deliveryFee }</div> 
                                </div>
                                <div className='Tax_Charges'>
                                    <div className='Tax_Charges_heading'>Taxes and Charges</div>
                                <div className='Tax_Charges_fees'>₹{ Math.round(deliveryFee*1.5) }</div> 
                                </div>
                            </div>
                            
                        </div>
                        <div className='To_Pay'>
                                <div className='TO_PAY_heading'>TO PAY</div>
                        <div className='TO_PAY_fees'>₹{ Math.round(itemTotal * 100 ) / 100 + deliveryFee + Math.round(deliveryFee*1.5) -discount }</div>
                            </div>
                    </>
                }
            </div>
            <div className='Address_Section_Cart'>
                    {!addressSelected &&        
                <>
                    <div className='Address_Section_heading'>Delivery address</div>
                    <div className="Address_Section_Sub">
                            {UserAddressArray.map((item) => (
                                <div className='Add_Address_Box' onClick={() => (
                                    handleAddressClick(item)
                                )}>
                                <div className='Add_Address'>
                                    <img src={locationPlus} />
                                    <div className='Address'>
                                        <div className="heading">Home</div>
                                            <div className='add'>{item.UserAddressArray.flatNumber}, {item.UserAddressArray.buildingName}, {item.UserAddressArray.cityName}, {item.UserAddressArray.stateName}, India - {item.UserAddressArray.pincode}<br/></div>
                                    </div>
                                </div>
                                <div className="Deliver_Here_Button"><span>DELIVER HERE</span></div>
                            </div>
                            ))}     
                        
                        <div className='Add_Address_Box' onClick={AddressCardOpen}>
                            <div className='Add_Address'>
                                <img src={locationPlus} />
                                <div className='Address'>
                                    <div className="heading">Add New Address</div>
                                    <div className='add'>Trouser Leg Road, Washington DC, Seattle, 20001, USA</div>
                                </div>
                            </div>
                            <div className="Add_New_Button"><span>ADD NEW</span></div>
                        </div>
                    </div>
                </>        
                }    
                    {addressSelected &&  
                        <>
                            <div className='Address_Section_heading'>Delivery address</div>
                            <div className='Address_Section_heading_sub'> 
                                <img className='mapImage' src={mapImage} />
                                <div className='Add_Address_Box1'>
                                    <div className='Add_Address'>
                                        <img src={locationPlus} />
                                        <div className='Address'>
                                            <div className="heading">Home</div>
                                            <div className='add'>{addressWhichUserSelected.UserAddressArray.flatNumber}, {addressWhichUserSelected.UserAddressArray.buildingName}, {addressWhichUserSelected.UserAddressArray.cityName}, {addressWhichUserSelected.UserAddressArray.stateName}, India - {addressWhichUserSelected.UserAddressArray.pincode}<br/></div>
                                        </div>
                                </div>
                                <button onClick={confirmOrder} className='orderButton' type='submit'>CONFIRM ORDER</button>
                                </div>
                            </div>
                        
                        </>
                    }  
            </div>
            
            </section>
            <section className={`${isOpenCoupenCard ? "blueFrame" : " "}`} onClick={CoupenCardClose}>
            </section>
            <section className={`${isOpenAddressCard ? "blueFrame" : " "}`} onClick={AddressCardClose}>
            </section>
            <section className={`Offer_Coupen_Card ${isOpenCoupenCard ? "Offer_Coupen_Card_Active" : ""}`}>
                <img onClick={CoupenCardClose} className='close_button_Coupen_Card' src={close}/>
                <div className="Coupen_Box" onClick={CoupenApplied1}>
                    <div className='Available_Coupen'>AVAILABLE COUPEN</div>
                    <div className='Coupen_Code'>
                        <img src={CoupenImage} />
                        <div>{ Coupen }</div>
                    </div>
                    <div className='Coupen_Offer_Cart'>Get {Offer}</div>
                    <div className='Description'>Use code { Coupen } & get { Offer } on orders above ₹149.Applicable on all items. Maximum discount: ₹100</div>
                </div>
                
                <div className="Coupen_Box" onClick={CoupenApplied2}>
                    <div className='Available_Coupen'>AVAILABLE COUPEN</div>
                    <div className='Coupen_Code'>
                        <img src={CoupenImage} />
                        <div>WIN 125</div>
                    </div>
                    <div className='Coupen_Offer_Cart'>Get ₹125 off</div>
                    <div className='Description'>Use code WIN125 & get ₹125 off on orders above ₹249.Applicable on all items.</div>
                </div>
                
                <div className="last_Div"></div>
            </section>
            <section className={`Address_Card ${isOpenAddressCard ? "Address_Card_Active" : ""}`}>
                <div className="Address_Card_header">
                    <img onClick={AddressCardClose} className='close_button_Address_Card' src={close} />
                    <div className="heading">Save delivery address</div>
                </div>
                <form>
                    <div className='Address_Form_Div'>
                        <div className="FlatNumber">
                            <input required='true' autoComplete='off' type="text" className="FlatNumber_Box" value={FlatNumber} name="FlatNumber" onChange={handelChange}></input>
                            <label className={`Flat_Number_label ${FlatNumber==="" ? "" : "Flat_Number_filled"}`}>Flat No.</label>
                        </div>
                        <div className="BuildingName">
                            <input required='true' autoComplete='off' type="text" className="BuildingName_Box" value={BuildingName} name="BuildingName" onChange={handelChange}></input>
                            <label className={`BuildingName_label ${BuildingName==="" ? "" : "Building_filled"}`}>House/Building Name</label>
                        </div>
                        <div className="StreetName">
                            <input required='true' autoComplete='off' type="text" className="StreetName_Box" value={StreetName} name="StreetName" onChange={handelChange}></input>
                            <label className={`StreetName_label ${StreetName==="" ? "" : "StreetName_filled"}`}>Street Name</label>
                        </div>
                        <div className="CityName">
                            <input required='true' autoComplete='off' type="text" className="CityName_Box" value={CityName} name="CityName" onChange={handelChange}></input>
                            <label className={`CityName_label ${CityName==="" ? "" : "CityName_filled"}`}>City</label>
                        </div>
                        <div className="StateName">
                            <input required='true' autoComplete='off' type="text" className="StateName_Box" value={StateName} name="StateName" onChange={handelChange}></input>
                            <label className={`StateName_label ${StateName==="" ? "" : "StateName_filled"}`}>State</label>
                        </div>
                        <div className="Pincode">
                            <input require='true' autoComplete='off' type="text" className="Pincode_Box" value={Pincode} name="Pincode" onChange={handelChange}></input>
                            <label className={`Pincode_label ${Pincode==="" ? "" : "Pincode_filled"}`}>Pincode</label>
                        </div>
                        
                    </div>
                    
                    <div className='Save_Address'>
                        <buttom type='submit' onClick={AddNewAddress} className="buttton">SAVE ADDRESS & PROCEED</buttom>
                    </div>
                    
                </form>
            </section></>
            }
        </main>
    );  
};

export default Cart;