import React, { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';


const HelpFAQ = () => { 
    const [answer1, setanswer1] = useState(0);
    const [answer2, setanswer2] = useState(0);
    const [answer3, setanswer3] = useState(0);
    const [answer4, setanswer4] = useState(0);
    const [answer5, setanswer5] = useState(0);
    const [answer6, setanswer6] = useState(0);
    const [answer7, setanswer7] = useState(0);
    const [answer8, setanswer8] = useState(0);

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
    const question7Clicked = () => { 
        if (answer7 === 0)
            setanswer7(1);
        else
            setanswer7(0);
    };
    const question8Clicked = () => { 
        if (answer8 === 0)
            setanswer8(1);
        else
            setanswer8(0);
    };
    return (
        <div className="Section_HelpPartner">
            <h2>FAQs</h2>
            <div className="Partner_Questions">
                <div className="Question_box ">
                    <a onClick={question1Clicked}>
                        <span className="Question">What is eat24/7 Customer Care Number?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer1===1 ? "upsidedown" : ""}`}/>
                    </a>
                    {answer1 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@eat24by7.in</div>
                                <br/>
                                <div className="ans">Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A eat24/7 representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</div>
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question2Clicked}>
                        <span className="Question">Can I edit my order?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer2===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer2 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question3Clicked}>
                        <span className="Question">I want to cancel my order</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer3===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer3 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question4Clicked}>
                        <span className="Question">Will eat24/7 be accountable for quality/quantity?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer4===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer4 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.</div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question5Clicked}>
                        <span className="Question">Is there a minimum order value?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer5===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer5 === 1 ?
                            <div className="Answer_box">
                                <div className="ans">We have no minimum order value and you can order for any amount. </div>
                                
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question6Clicked}>
                        <span className="Question">Do you charge for delivery?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer6===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer6 === 1 ?
                            <div className="Answer_box">
                            <div className="ans">Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. </div>
                              
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question7Clicked}>
                        <span className="Question">How long do you take to deliver?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer7===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer7 === 1 ?
                            <div className="Answer_box">
                            <div className="ans">Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant. </div>
                              
                            </div>
                         : <></>}
                </div>
                <hr />
                <div className="Question_box">
                    <a onClick={question8Clicked}>
                        <span className="Question">Can I order from any location?</span>
                        <KeyboardArrowDownRoundedIcon className={`arrow_help ${answer8===1 ? "upsidedown" : ""}`} />
                    </a>
                    {answer8 === 1 ?
                            <div className="Answer_box">
                            <div className="ans">We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.</div>
                              
                            </div>
                         : <></>}
                </div>
                <hr />
            </div>
        </div>
    );
};

export default HelpFAQ;