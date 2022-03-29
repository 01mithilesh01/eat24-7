import React,{ useState, useEffect } from 'react';
import SignInFood from '../Images/SignInFood.png';
import { Link, useHistory } from "react-router-dom";
import { auth} from "../firebase";

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });
    const { email, password } = loginDetails;
    const handelChangeLogInDetails = (e) => { 
        let { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
    };
    
    const history = useHistory();
    const login = (event) => {
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            alert("login succesfully");
            history.push("/");
        })
        .catch((error) => {
            alert(error.message)}
            );
    };


    return (
        <div className="Login">
                <div className="Login_Heading">
                    <div className="Login_Description">Login</div>
                    <img className="SignInFood" src={SignInFood}></img>
                </div>
                <form onSubmit={login}>
                    <div className="Login_Email">
                    <input type="email" className="Login_Email_Box" value={email} name="email" onChange={handelChangeLogInDetails}></input>
                        <label className={`Login_Email_label ${email==="" ? "" : "Login_Email_label_filled"}`}>Email</label>
                    </div>
                    <div className="Login_Password">
                        <input type="password" className="Login_Password_Box" value={password} name="password" onChange={handelChangeLogInDetails}></input>
                        <label className={`Login_Password_label ${password==="" ? "" : "Login_Password_label_filled"}`}>Password</label>
                    </div>
                
                    <button type="submit" onClick={login} className="Login_Button">LOGIN</button>
                
                </form>
        </div>
    );
};

export default Login;