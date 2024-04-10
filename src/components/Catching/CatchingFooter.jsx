import React from 'react';
import { Link } from 'react-router-dom';
import Certified from '../../assets/images/Baseball/Certified.png';
import LocationView from '../../assets/images/LocationView.png';


function CatchingFooter() {

    return (
        <div>
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
        <p>&copy; 2021 Catching</p>
        </div>
    );
    }

export default CatchingFooter;