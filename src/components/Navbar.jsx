import React, {useState, useEffect} from 'react';
import './Navbar.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { NavLink, Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { sendUserName } from './Signup';
import DropdownUser from './DropdownUser';
import { userSendWhenLogout } from './DropdownUser';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);
    const [{ user }] = useStateValue();
    const [isLogged, setIsLogged] = useState(false);
    
    // if (userSendWhenLogout)
    //     setIsLogged(false);
    
    useEffect(() => {
        if (user === null) {
        setIsLogged(false);
        } else {
        setIsLogged(true);
        }

    }, [user]);
    
    const logout = () => {
        if (user) {
        auth.signOut();
        setIsLogged(false);
        // alert("logged out succesfully");
        }
    };
    return (
        <>
            <div className="Navbar">
                <Link to="/"><h1 className="logo">eat24/7</h1></Link>
            
                <div className="Navbar_icons">
                    <div className="Search">
                        <NavLink to="/Search" activeClassName="active_class" className="link">
                            <SearchRoundedIcon />
                            <span>Search</span>
                        </NavLink>
                    </div>
                    <div className="Help">
                        <NavLink to="/Help" activeClassName="active_class" className="link">
                            <HelpOutlineTwoToneIcon />
                            <span>Help</span>
                        </NavLink>
                    </div>
                    <div className="Sign_In">
                        {isLogged ?
                            <>
                                <div className="link"
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}>
                                    <PersonOutlineIcon />
                                    {(isLogged && user) ? (user.displayName ? <span className="displayUserName">{user.displayName}</span> : <span className="displayUserName">{sendUserName}</span>) : <span>Sign Up</span>}
                                    {dropdown && <DropdownUser/>}
                                </div>          
                            </>
                            :
                            <NavLink to="/SignIn" activeClassName="active_class" className="link">
                                <PersonOutlineIcon />
                                <span>Sign Up</span>
                            </NavLink>
                        }
                    </div>
                    {isLogged &&
                        <div className="Cart">
                            <NavLink to="/Cart" activeClassName="active_class" className="link">
                                <ShoppingCartOutlinedIcon />
                                <span>Cart</span>
                            </NavLink>
                        </div>
                    }
                        {/* {isLogged && <button onClick={logout}>Log Out</button>} */}
                        
                </div>
            </div>
        </>
    );
};

export default Navbar;