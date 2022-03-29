import React, { useState, useRef, useEffect } from 'react';
import SignInFood from '../Images/SignInFood.png';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { auth, db } from "../firebase";

var sendUserName = "User";
const Signup = () => {   
    
    const [signupDetails, setSignupDetails] = useState({
        phoneNumber: "",
        displayName: "",
        email: "",
        password: "",
        passwordConf: "",
    });
    const { phoneNumber, displayName, email, password, passwordConf } = signupDetails;
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();
    
    const register = (event) => {
        event.preventDefault();
        
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            //calling dispatch
              sendUserName = displayName;
            dispatch({
              type: "SET_USERNAME",
              userName: displayName,
            });
                
            alert("user account created succesfully");
            history.push("/");
          })
          .catch((error) => {
            alert(error.message);
          });
      };
    

    const handelChangeSignUpDetails = (e) => { 
        let { name, value } = e.target;
        setSignupDetails({ ...signupDetails, [name]: value });
    };

    return (
        
        <form autoComplete="off">
                <div className="SignUp">
                    <div className="SignUp_Heading">
                    <div className="SignUp_Description">Sign up</div>
                    
                        <img className="SignInFood" src={SignInFood}></img>
                </div>
                    
                    <div className="SignUp_PhoneNo">
                        <div className="PhoneNo">
                            <input
                                autoComplete="off"
                                type="number"
                                className="SignUp_PhoneNo_Box"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handelChangeSignUpDetails}
                            ></input>
                            <label className={`SignUp_PhoneNo_label ${phoneNumber==="" ? "" : "SignUp_PhoneNo_label_filled"}`}>Phone Number</label>
                        </div>
                        <div className="Name">
                            <input
                                autoComplete="off"
                                type="text"
                                className="SignUp_Name_Box"
                                name="displayName"
                                value={displayName}
                                onChange={handelChangeSignUpDetails}
                            ></input>
                            <label className={`SignUp_Name_label ${displayName==="" ? "" : "SignUp_Name_label_filled"}`}>Name</label>
                        </div>
                        <div className="Email">
                            <input
                                autoComplete="off"
                                type="email"
                                className="SignUp_Email_Box"
                                name="email"
                                value={email}
                                onChange={handelChangeSignUpDetails}
                            ></input>
                            <label className={`SignUp_Email_label ${email==="" ? "" : "SignUp_Email_label_filled"}`}>Email</label>
                        </div>
                        <div className="Password">
                            <input
                                autoComplete="off"
                                type="password"
                                className="SignUp_Password_Box"
                                name="password"
                                value={password}
                                onChange={handelChangeSignUpDetails}
                            ></input>
                            <label className={`SignUp_Password_label ${password==="" ? "" : "SignUp_Password_label_filled"}`}>Password</label>
                        </div>
                        <div className="PasswordConfirm">
                            <input
                                autoComplete="off"
                                type="password"
                                className="SignUp_PasswordConfirm_Box"
                                name="passwordConf"
                                value={passwordConf}
                                onChange={handelChangeSignUpDetails}
                            ></input>
                                <label className={`SignUp_PasswordConfirm_label ${passwordConf==="" ? "" : "SignUp_PasswordConfirm_label_filled"}`}>Confirm Password</label>
                        </div>
                </div>
                
                <button type="submit" onClick={register} className="SignUp_Button">SIGN UP</button>
                
                    
                </div>
            </form>
    );
};

export default Signup;
export { sendUserName };