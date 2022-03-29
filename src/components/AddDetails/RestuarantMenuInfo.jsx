import React, {useState} from 'react';
import './RestuarantMenuInfo.css';
import firebase from 'firebase';
import { storage, db } from "../../firebase";

const RestuarantMenuInfo = () => {
    const [VegNonV, setVegNonV] = useState("Veg");
    const [Menu, setMenu] = useState("");
    const [Price, setPrice] = useState(0);
    const file = "KBsfsTURsOL9ibIhKXhW";
    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection("RestuarantInfo").doc(file).collection("Family Binge Combos").add({
            VegNonV: VegNonV,
            Menu: Menu,
            Price: Price,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setVegNonV("Veg");
        setMenu("");
        setPrice(10);
    };

    return (
        <div className="RestuarantMenuInfo_take_input">
            <h1>Restuarant Menu Info</h1>
            <form>
                <label>Veg/NonVeg :</label>
                <br />
                <input type="text" name="VegNonV" value={VegNonV} className="RestuarantMenuInfo_input" onChange={(e) => { setVegNonV(e.target.value) }} />
                <br />
                <label>Menu  :</label>
                <br />
                <input type="text" name="Menu" value={Menu} className="RestuarantMenuInfo_input" onChange={(e) => { setMenu(e.target.value) }} />
                <br />
                <label>Price  :</label>
                <br />
                <input type="text" name="Price" value={Price} className="RestuarantMenuInfo_input" onChange={(e) => { setPrice(e.target.value) }} />
                <br />
                <button onClick={handleSubmit} type="submit" className="RestuarantMenuInfo_upload_button" >Upload</button>
                <br />
                
            </form>
        </div>
    )
};

export default RestuarantMenuInfo;
