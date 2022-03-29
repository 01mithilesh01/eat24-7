import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OfferCarousel from './components/OfferCarousel';
import Help from './components/Help';
import SignIn from './components/SignIn';
import RestuarantMenu from './components/Restuarant-Menu/RestuarantMenu';
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";
import RestuarantInfo from './components/AddDetails/RestuarantInfo';
import RestuarantMenuInfo from './components/AddDetails/RestuarantMenuInfo';
import Cart from './components/Restuarant-Menu/Cart';
import OrderPlaced from './components/Restuarant-Menu/OrderPlaced';
import OrdersOfUser from './components/OrdersOfUser';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";

function App() {
  const [{ userName, user }, dispatch] = useStateValue();
  
    let mobileVersion=false;
    if(window.innerWidth <= 800)
      mobileVersion=true;
    else
      mobileVersion=false;

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is log in

        console.log(authUser);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        dispatch({
          type: "SET_USERNAME",
          userName: authUser.displayName,
        });
        dispatch({
          type: "SET_USERUID",
          userUID: auth.currentUser.uid,
        });
        console.log(auth.currentUser.uid);
        if (authUser.displayName )
        {

        }
        else
        {
          authUser.updateProfile({
            displayName: userName,
          });
          console.log('sucessfully change the user name to ' + userName)
        }
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    
    return () => {
      unsubscribe();
    };
  },[user,userName,dispatch]);
  return (
     
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title className='Helmet_Title'>eat24/7</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      { !mobileVersion ?
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage />
            <Footer />
          </Route>

          <Route exact path="/Search" >
            <Navbar />
            <Search />
          </Route>
          <Route exact path="/Help" >
            <Navbar />
            <Help />
          </Route>
          
          <Route exact path="/SignIn" >
            <Navbar />
            <SignIn />
          </Route>
          <Route exact path="/Cart" >
            <Navbar />
            <Cart />
          </Route>
          <Route exact path="/RestuarantMenu/:id" >
            <Navbar />
            <RestuarantMenu />
            <Footer />
          </Route>
          <Route exact path="/AddDetails/RestuarantInfo" >
            <Navbar />
            <RestuarantInfo />
          </Route>
          <Route exact path="/AddDetails/RestuarantMenuInfo" >
            <Navbar />
            <RestuarantMenuInfo />
          </Route>
          <Route exact path="/Restuarant-Menu/OrderPlaced" >
            <OrderPlaced />
          </Route>
          <Route exact path="/OrdersOfUser" >
            <Navbar />
            <OrdersOfUser />
            
          </Route>
        </Switch>
        </Router>
        :
        <div>This website is designed for desktop only. Kindly try to open it in desktop</div>
      }
    </>
     
  );
}

export default App;









