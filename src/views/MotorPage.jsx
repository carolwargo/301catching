import React from "react";
import Hit from '../assets/images/Baseball/Hit.png';
import Catch from '../assets/images/Baseball/Catch.png';
import { Link } from "react-router-dom";
import BBSocialIcons from '../components/Baseball/BBSocialIcons';

function MotorPage() {

    return (
        <div>
         {/**Start page container */}
 <div className="w3-container">
    <div>
      <BBSocialIcons />
      <h1 className=" w3-border-light-grey "><b>MOTOR</b>
    <span className='fw-light'> |PREFERENCE</span></h1>
    <p className="w3-margin-bottom">What is Motor Preference?</p>
    </div>


    
      <h1>Perform as your body wants to!
It's easier, more efficient and safer!
</h1>
<h1 className="text-danger">Primal performance is the key to success.

</h1>
<h4>When you're in the zone, mastering baseball becomes effortless, and 
    every move feels like second nature.</h4>
  
  <p>Entering this state of flow occurs when your natural coordination 
    reaches its peak, allowing you to effortlessly achieve your goals with precision and adaptability.

This seamless coordination relies on your motor preferences, which are 
identified and leveraged through our innovative approach.</p>

   <h5>BENEFITS: </h5>
   <p>
By understanding an athlete's unconscious movement patterns and capitalizing 
on their strengths, we create a personalized Motor Preferences profile. 
This profile guides us in aligning mechanics with individual preferences, 
enhancing performance while reducing the risk of injury and extending 
athletic careers.</p>
<p>Whether you're a physiotherapist, podiatrist, trainer, or coach, this isn't just a passing 
    trend- It's a scientifically backed revolution that transforms how we approach athlete care, 
    prevention, and training.
    <span> <Link to="/" 
    className="link-primary justify-content-end text-decoration-none"> Review the science, Click to learn more...</Link>
        </span>
        </p> 
<div className="row">
    <div className="w3-col l6 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding w3-padding-24 w3-xxlarge">
        <b>TRAIN</b><span className='text-secondary'>|CATCHING</span>
       
            </div>
            
            <img src={Catch} alt="catch" style={{width:"100%"}} 
            
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
      <button className="w3-button w3-light-gray w3-section" style={{boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'}}>
      <b>LEARN MORE</b><i className="fas fa-angle-double-right w3-margin-left"></i>
      </button>
    </div>
    <div className="w3-col l6 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding w3-padding-24 w3-xxlarge">
            <b>TRAIN</b><span className='text-secondary'>|MECHANICS</span></div>
            <img src={Hit} alt="catch" style={{width:"100%"}} 
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
      <button className="w3-button w3-light-gray w3-section" style={{boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'}}>
      <b>LEARN MORE</b><i className="fas fa-angle-double-right w3-margin-left"></i>
      </button>
    </div>
    </div>
   
    <br />
   <br />
   <br />
   <br />
   
    <div className="row">
    <div className="w3-col l6 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>CATCH</b><span className='text-secondary'>|301</span></div>
        <img src={Catch} alt="House" style={{width:"100%"}} 
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>
    <div className="w3-col l6 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>HIT</b><span className='text-secondary'>|301</span></div>
        <img src={Hit} alt="House" style={{width:"100%"}} 
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>
    
    </div>
   
    </div> 
        </div>
    );
}       

export default MotorPage;