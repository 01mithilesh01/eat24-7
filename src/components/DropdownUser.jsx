import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DropdownUser.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

var userSendWhenLogout = true;
const DropdownUser = () => {
    const [dropdown, setDropdown] = useState(false);
    
    const [{ user }] = useStateValue();
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        if (user === null) {
        setIsLogged(false);
        } else {
        setIsLogged(true);
        }
    }, [user]);
    const logout = () => {
        userSendWhenLogout = false;
        if (user) {
        auth.signOut();
        setIsLogged(false);
        alert("logged out succesfully");
        }
    };

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"} onClick={() => setDropdown(!dropdown)}
      >
              {/* <li><Link className="submenu-item" onClick={() => setDropdown(false)}>Profile</Link></li> */}
              <li><Link to="/OrdersOfUser" className="submenu-item" onClick={() => setDropdown(false)}>Orders</Link></li>
              <li><Link to="/" className="submenu-item" onClick={logout}>Logout</Link></li>
      </ul>
    </>
  );
}

export default DropdownUser;
export { userSendWhenLogout };