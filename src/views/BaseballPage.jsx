import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import LocationView from "../assets/images/LocationView.png";
import BBSocialIcons from '../components/Baseball/BBSocialIcons';
import Certified from '../assets/images/Baseball/Certified.png';   

function BaseballPage() {

    return (
        <div className="home" id="home">
 {/*Start Page Content */}
 <div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>

 {/**Start page container */}
 <div className="w3-container w3-padding-16" id="properties">

    <div className="w3-padding-32">
    <div  style={{marginTop: '20px'}}>
  <BBSocialIcons/>
  </div>
    <h3 className=" w3-border-light-grey text-center"><b>MOTOR</b>
    <span className='fw-light'> |PREFERENCE</span></h3>
  <p className="text-center w3-margin-bottom">What is Motor Preference?</p>
  <h4>When you're in the zone, mastering baseball becomes effortless, and every move feels like second nature.</h4>
  
  <p>Entering this state of flow occurs when your natural coordination reaches its peak, allowing you to effortlessly achieve your goals with precision and adaptability.

This seamless coordination relies on your motor preferences, which are identified and leveraged through our innovative approach.</p>

   <h5>BENEFITS: </h5>
   <p>
By understanding an athlete's unconscious movement patterns and capitalizing on their strengths, we create a personalized Motor Preferences profile. This profile guides us in aligning mechanics with individual preferences, enhancing performance while reducing the risk of injury and extending athletic careers.</p>
<p>Whether you're a physiotherapist, podiatrist, trainer, or coach, this isn't just a passing 
    trend – it's a scientifically backed revolution that transforms how we approach athlete care, 
    prevention, and training.</p>
    <p><Link to='/science' className="text-primary"> View the Science Behind Motor Preference <i className="fas fa-arrow-right"> </i>
    </Link></p>
 
<div className="row">
    <div className="w3-col l6 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>INDIVIDUAL</b><span className='text-secondary'>|PLAYERS</span></div>
      </div>
    </div>
    <div className="w3-col l6 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>TEAM</b><span className='text-secondary'>|PACKAGES</span></div>
     
      </div>
    </div>
    </div>  
    <br />
    </div>
    </div> 
    </div>

    <div className="border-bottom border-top shadow w3-padding-large">
    <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-8 col-lg-8 px-2">
  <h4><b>Title</b></h4>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui exercitationem doloribus totam itaque? Velit soluta ea dolores molestias pariatur reiciendis maxime nostrum. Distinctio possimus sed consequatur reprehenderit repudiandae velit 
    <span>   
        <Link to="/" className="link-primary justify-content-end text-decoration-none"> learn more...</Link></span></p> 
       </div>
    

    <div className="col-sm-12 col-md-4 col-lg-4">
    <div className="w3-margin-top w3-margin-bottom">
  <div className="mb-2">
    <Button variant="dark" className="w-100">
      <Link className="text-white text-decoration-none"><i className="fas fa-download"></i> Specs</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100">
      <Link className="text-white text-decoration-none"><i className="fas fa-calendar-alt"></i> Showing</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100">
      <Link className="text-white text-decoration-none"><i className="fas fa-share"></i> Share</Link>
    </Button>
</div>
</div>
</div>
</div>
</div>


<div className="w3-container w3-padding-48" id="contact">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-6 col-lg-6" >
<div className="container">
<h1 className="w3-border-light-grey w3-padding-16"><b>CONTACT</b>US</h1>
    <p>Let's talk about our next project.</p>
 
<form action="/action_page.php" target="_blank">
      <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"/>
      <button className="w3-button w3-black w3-section" type="submit">
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
</div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
  <div className="w3-container">
  <h3 className="w3-border-light-grey w3-padding-8">WHERE WE OPERATE!</h3>
    <img src={LocationView} className="w3-image" alt='location-map' style={{width:"100%"}}/>
    <p>Hours of Operation: <br />Monday-Friday: 9:00 AM - 6:00 PM
    <br />Saturday-Sunday: Closed</p>
  </div>
</div>

  </div>
  </div>
  
   {/*End Page Container */}
   
 {/*End Page Content */}
{/*Start Footer*/}
 <footer className="w3-center w3-padding-16">
    <img src={Certified} alt="logo" style={{width:"100px"}}/>
  <p>Powered by <Link to="/" title="301link"  className="w3-hover-text-green"><b>301</b>CATCHING.COM</Link></p>
</footer>

</div>

    );
};

export default BaseballPage;