import React,{ useState } from 'react';
import './Search.css';
import OfferCarousel from './OfferCarousel';
import './Help.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import HelpPartner from './HelpPartner';
import HelpLegal from './HelpLegal';
import HelpFAQ from './HelpFAQ';
import Navbar from './Navbar';
import firebase from 'firebase';

const Help = () => { 

    const [component, setComponent] = useState(1);

    const changeComponentToPartner = () => { 
        setComponent(1);
    };
    const changeComponentToLegal = () => { 
        setComponent(2);
    };
    const changeComponentToFAQ = () => { 
        setComponent(3);
    };

    var user = firebase.auth.currentUser;
    console.log(user,"here");
    return (
        <>
            <div className="Section_help">
                <h1 className="help">Help & Support</h1>
                <div className="help_tagline">Let's take a step ahead and help you better.</div>
            </div>
            <div className="Help_content">
                <div className="Help_content_2">
                    <div className="Help_sidebar">
                        <a onClick={changeComponentToPartner}>
                            <div className={`Partner ${ component===1 ? "active" : "" }`}>Partner Onboarding</div>
                        </a>
                        <a onClick={changeComponentToLegal}>
                            <div className={`Legal ${ component===2 ? "active" : "" }`}>Legal</div>
                        </a>
                        <a onClick={changeComponentToFAQ}>
                            <div className={`FAQ ${ component===3 ? "active" : "" }`}>FAQs</div>
                        </a>
                    </div>

                    <div className="Questions">
                        { component===1 ? (<HelpPartner />):(component===2 ? (<HelpLegal />) : (<HelpFAQ />))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;
