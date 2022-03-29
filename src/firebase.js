import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyC8qJGjkCVRCPo5h8VdQablNLZjWWH4RXU",
    authDomain: "eat24by7-3d7be.firebaseapp.com",
    databaseURL: "https://eat24by7-3d7be-default-rtdb.firebaseio.com",
    projectId: "eat24by7-3d7be",
    storageBucket: "eat24by7-3d7be.appspot.com",
    messagingSenderId: "458188893735",
    appId: "1:458188893735:web:8f46eb9f072be3894a2802"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage,firebaseApp};