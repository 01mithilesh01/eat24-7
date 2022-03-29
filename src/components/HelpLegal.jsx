import React, { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

const HelpLegal = () => { 
    const [answer1, setanswer1] = useState(0);
    const [answer2, setanswer2] = useState(0);
    const [answer3, setanswer3] = useState(0);
    const [answer4, setanswer4] = useState(0);

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
    
    return (
        <div className="Section_HelpPartner">
            <h2>Legal</h2>
            <div className="Partner_Questions">
                <div className="Question_box ">
                    <a onClick={question1Clicked}>
                        <span className="Question">Terms of Use</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer1===1 ? "upsidedown" : ""}`}/>
                    </a>
                    {answer1 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">These terms of use (the "Terms of Use") govern your use of our website www.eat24by7.in (the "Website") and our "eat24/7" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.</div>
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question2Clicked}>
                        <span className="Question">Privacy Policy</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer2===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer2 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">We ( Bundl Technologies Private Limited, alias "eat24/7" ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of www.eat24by7.com ("Website") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to "you" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website. </div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question3Clicked}>
                        <span className="Question">Cancellations and Refunds</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer3===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer3 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">a) As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, eat24/7 reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.  b)If you cancel your order after one minute of placing it, eat24/7 shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)eat24/7 reserves the right to charge you cancellation fee for the orders constrained to be cancelled by eat24/7 for reasons not attributable to                                 <div className="ans">a) As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, eat24/7 reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.  b)If you cancel your order after one minute of placing it, eat24/7 shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)eat24/7 reserves the right to charge you cancellation fee for the orders constrained to be cancelled by eat24/7 for reasons not attributable to eat24/7, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, eat24/7 will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to eat24/7 or the restaurant partner or delivery partners, eat24/7 shall not charge you any cancellation fee.</div>
, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, eat24/7 will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to eat24/7 or the restaurant partner or delivery partners, eat24/7 shall not charge you any cancellation fee.</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question4Clicked}>
                        <span className="Question">Terms of Use for eat24/7 ON-TIME / Assured</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer4===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer4 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">These terms of use (the "Terms of Use") that govern your use of our service eat24/7 ON-TIME / Assured  ("ON-TIME" / "Assured") on our website www.eat24by7.in (the "Website") and our eat24/7 application for mobile and handheld devices (the "App"). The services on ON-TIME / Assured  available on our Website and the App are jointly referred to as the "On-Time Delivery". Please read these Terms of Use carefully before you use the Services. If you do not agree to these Terms of Use, you may not use the Services. By using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (incorporated by reference herein) and creates a legally binding arrangement to abide by the same. </div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                
            </div>
        </div>
    );
};

export default HelpLegal;