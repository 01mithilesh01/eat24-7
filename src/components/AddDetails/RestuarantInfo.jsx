import React, {useState} from 'react';
import './RestuarantInfo.css';
import firebase from 'firebase';
import { storage, db } from "../../firebase";

const RestuarantInfo = () => {
    const [url, setUrl] = useState("");
    const [ tag, setTag ] = useState("");
    const [ name, setName ] = useState("");
    const [ imageRestuarant, setImageRestuarant ] = useState(null);
    const [ cuisine, setCuisine ] = useState("");
    const [ rating, setRating ] = useState("");
    const [ deliveryTime, setDeliveryTime ] = useState("");
    const [ serving, setServing ] = useState("");
    const [offer, setOffer] = useState("");
    const [progress, setProgress] = useState(0);

    const handleSubmit = (e) => { 
        e.preventDefault();
        const uploadTask = storage.ref(`/RestuarantImages/${imageRestuarant.name}`).put(imageRestuarant);
        uploadTask.on(
            "state_changed",
            (snapshot) => { 
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error) => {
                // Error function 
                alert(error);
            },
            () => { 
                storage
                    .ref("RestuarantImages")
                    .child(imageRestuarant.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);

                        // saving data in database
                        db.collection("RestuarantInfo").add({
                            imageUrl: url,
                            name: name,
                            cuisine: cuisine,
                            rating: rating,
                            deliveryTime: deliveryTime,
                            serving: serving,
                            offer: offer,
                            tag: tag, 
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        });
                    });
                setUrl("");
                setTag("");
                setName("");
                setCuisine("");
                setRating("");
                setDeliveryTime("");
                setServing("");
                setOffer("");  
                setImageRestuarant(null);
                setProgress(0);
            }  
        );
    };

    return (
        <div className="RestuarantInfo_take_input">
            <h1>Restuarant Info</h1>
            <form>
                <label>Tag :</label>
                <br />
                <input type="text" name="tag" value={tag} className="RestuarantInfo_input" onChange={(e) => { setTag(e.target.value) }} />
                <br />
                <label>Name :</label>
                <br />
                <input type="text" name="name" value={name} className="RestuarantInfo_input" onChange={(e) => { setName(e.target.value) }} />
                <br />
                <label>Image :</label>
                <br />
                <input type="file" name="imageRestuarant" className="RestuarantInfo_input" onChange={(e) => { setImageRestuarant(e.target.files[0]) }} />
                <br />
                <label>Cuisine :</label>
                <br />
                <input type="text" name="cuisine" value={cuisine} className="RestuarantInfo_input" onChange={(e) => { setCuisine(e.target.value) }} />
                <br />
                <label>Rating :</label>
                <br />
                <input type="text" name="rating" value={rating} className="RestuarantInfo_input" onChange={(e) => { setRating(e.target.value) }} />
                <br />
                <label>Delivery time :</label>
                <br />
                <input type="text" name="deliveryTime" value={deliveryTime} className="RestuarantInfo_input" onChange={(e) => { setDeliveryTime(e.target.value) }} />
                <br />
                <label>Serving :</label>
                <br />
                <input type="text" name="serving" value={serving} className="RestuarantInfo_input" onChange={(e) => { setServing(e.target.value) }} />
                <br />
                <label>Offer :</label>
                <br />
                <input type="text" value={offer} className="RestuarantInfo_input" onChange={(e) => { setOffer(e.target.value) }} />
                <br />
                <button onClick={handleSubmit} type="submit" className="RestuarantInfo_upload_button" >Upload</button>
                <br />
                <progress
                    className="imageupload__progress"
                    value={progress}
                    max="100"
                />
            </form>
        </div>
    )
}

export default RestuarantInfo;
