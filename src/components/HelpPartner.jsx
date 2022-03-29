import React, { useState } from 'react';
import './HelpPartner.css';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

const HelpPartner = () => { 
    const [answer1, setanswer1] = useState(0);
    const [answer2, setanswer2] = useState(0);
    const [answer3, setanswer3] = useState(0);
    const [answer4, setanswer4] = useState(0);
    const [answer5, setanswer5] = useState(0);
    const [answer6, setanswer6] = useState(0);

    const question1Clicked = () => { 
        
        if (answer1 === 0)
            setanswer1(1);
        else
            setanswer1(0);
    };
    const question2Clicked = () => { 
        if (answer2 === 0)
            setanswer2(1);
        else
            setanswer2(0);
    };
    const question3Clicked = () => { 
        if (answer3 === 0)
            setanswer3(1);
        else
            setanswer3(0);
    };
    const question4Clicked = () => { 
        if (answer4 === 0)
            setanswer4(1);
        else
            setanswer4(0);
    };
    const question5Clicked = () => { 
        if (answer5 === 0)
            setanswer5(1);
        else
            setanswer5(0);
    };
    const question6Clicked = () => { 
        if (answer6 === 0)
            setanswer6(1);
        else
            setanswer6(0);
    };

    return (
        <div className="Section_HelpPartner">
            <h2>Partner Onboarding</h2>
            <div className="Partner_Questions">
                <div className="Question_box ">
                    <a onClick={question1Clicked}>
                        <span className="Question">What are the manditory documents needed to list my restuarant on eat24/7?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer1===1 ? "upsidedown" : ""}`}/>
                    </a>
                    {answer1 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">Email us on eat24/7@gmail.com</div>
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question2Clicked}>
                        <span className="Question">I want to partner my restuarant with eat24/7</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer2===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer2 === 1 ?
                            <div className="Answer_box">
                                <div className="ans"><span>-</span>  Copies of the below documents are mandatory</div>
                                <div className="ans"><span>-</span>  FSSAI Licence OR FSSAI Acknowledgement </div>
                                <div className="ans"><span>-</span>  Pan Card</div>
                                <div className="ans"><span>-</span>  GSTIN Certificate</div>
                                <div className="ans"><span>-</span>  Cancelled Cheque OR bank Passbook</div>
                                <div className="ans"><span>-</span>  Menu</div>
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question3Clicked}>
                        <span className="Question">After I submit all documents, how long will it take for my restaurant to go live on eat24/7?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer3===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer3 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question4Clicked}>
                        <span className="Question">What is this one time Onboarding fees? Do I have to pay for it while registering?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer4===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer4 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from eat24/7.</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question5Clicked}>
                        <span className="Question">Who should I contact if I need help & support in getting onboarded?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer5===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer5 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@eat24/7.in</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question6Clicked}>
                        <span className="Question">I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer6===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer6 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
            </div>
        </div>
    );
};

export default HelpPartner;