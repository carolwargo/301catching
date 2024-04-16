import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

import Corey from '../assets/images/Baseball/Corey.png';
import LocationView from '../assets/images/LocationView.png';
import JOHN from '../assets/images/Baseball/JOHN.png';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="about" id="about">
    <div className="w3-content w3-container w3-padding-64">
        <div className="w3-content w3-container">
          <div className="row justify-content-center align-items-center  w3-margin-top">
            <div className="col-lg-6 ">
              <h1 className=" fw-light"><b>ABOUT ME.</b></h1>
              <h5 className=" fw-light">"I'm Carol Wargo, and welcome to my corner of the internet!"</h5>
              <br />
              <p className=" fw-light"><em>"My passion lies in utilizing creative design to drive innovative solutions through technology. With a distinctive blend of skills and experience, I am a seasoned full-stack software developer and UX designer deeply committed to collaboration, bringing together diverse perspectives to tackle challenges effectively. With over 20 years of experience in business management & strategic development, I bring a wealth of knowledge and expertise to every project I undertake."</em></p>
            </div>
            <div className="col-lg-6 ">
              <img src={Corey} className="w3-round w3-image w3-opacity w3-hover-opacity-off mx-auto d-block" alt="Me" width="500" height="333" />
            </div>
          </div>
        </div>
<br />
<hr />
<br />
        {/* Technical Proficiencies */}
        <div className="row">
          
        <div className="w3-content w3-container ">
          <h2 className=""><strong>WHAT I DO BEST.</strong></h2>
          <br />
          <p className="w3-wide text-black" style={{fontSize:'1rem'}}><GiGears className="justify-content-center"/> Core Technologies</p>
              <div className="w3-light-grey shadow">
                <div className="w3-container w3-padding-small w3-black w3-center shadow" style={{width:"85%"}}>85%</div>
              </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><FaLaptopCode className="justify-content-center"/> Front-End Design</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"95%"}}>95%</div>
  </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><BsDatabaseLock  className="justify-content-center"/> Server-Side Development</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"80%"}}>80%</div>
  </div>
<br />
<p className="w3-wide text-black" style={{fontSize:'1rem'}}><HiOutlinePuzzlePiece className="justify-content-center"/> Full-Stack Integration</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
<br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><AiFillDatabase className="justify-content-center"/> Database Implementation</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>






{/** 

              <h3><strong>FRONT END DEVELOPMENT.</strong></h3>
              <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p>HTML</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p>CSS</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p>JavaScript</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p>React.js</p>
          <br />

          <h2 className=""><strong>WHAT I DO BEST.</strong></h2>
          <br />
              <h4><strong>SERVER-SIDE DEVELOPMENT.</strong></h4>
              <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p><b>Frameworks & Package Manager: </b> <br />Node.js, Express.js and NPM.</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p><b>Database Design & Management: </b> <br />Relational-MYSQL and NoSQL databases-MongoDB.</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p><b>API Development:</b><br />Graph QL, RESTful API's and Webhooks.</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-black" style={{width:"90%"}}>90%</div>
          </div>
          <p><b>Version Control:</b><br />
          GIT + tools; VS Code and Github</p>
          <br />
          */}
          </div>

       
              {/**Start skills 
 
  */}
  <br />
 <br />
</div>
<br />
</div>
{/**End technical proficiencies */}
{/*start testimonials */}
<div className="w3-row w3-center w3-black w3-padding-32">
  <div className="w3-half w3-section">
    <div className="row">
    <div className="w3-third w3-section">
    <div className="w3-container w3-card w3-white">
      <img src={JOHN} alt="john" style={{width:'100%'}}></img>
     </div>
      </div>
      <div className="w3-twothird w3-section">
      <i className="fa fa-quote-left w3-xxlarge"></i>
      <i className="fa fa-quote-right w3-xxlarge"></i>
      </div>
    </div>
  </div>
  <div className="w3-half w3-section">
  </div>
  </div>
  <div className="w3-row w3-center w3-black w3-padding-32">
  <div className="w3-half w3-section">
  </div>
  <div className="w3-half w3-section">
  </div>
  </div>

{/**end testimonials */}
{/**start experience count */}

<div className="w3-row w3-center w3-black w3-padding-32">
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">20<span style={{fontSize:'10px'}}>yrs</span> +</span><br />
   PLAYERS COACHED
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
   CAMPS & CLINICS
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">10+</span><br />
   COLLEGE PROGRAMS
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    MEETINGS
  </div>
  </div>
      

        {/* Location */}
        <div className="w3-container w3-padding-48 w3-white" id="contact">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-bottom" >
<div className="container">
<h1 className="w3-border-light-grey w3-padding-16"><b>CONTACT</b>US</h1>
    <p>READY TO GET START!</p>
 
<form action="/action_page.php" target="_blank">
      <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"/>
      <button className="w3-button w3-light-gray w3-section" type="submit">
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
</div>
    </div>
    
    <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-bottom" >
<div className="container">
  <h3 className="w3-border-light-grey w3-padding-8 w3-margin-bottom">WHERE WE OPERATE!</h3>
  
    <img src={LocationView} className="w3-image" alt='location-map' style={{width:"100%"}}/>
    <div className="w3-margin-top">
    <p>Hours of Operation: <br />Monday-Friday: 9:00 AM - 6:00 PM
    <br />Saturday-Sunday: Closed</p>
    </div>
  </div>
</div>

  </div>
  </div>
                 
        <div className="text-center w3-padding-16">
        <Link to="/resume#resume" onClick={scrollToTop}>
          <p><b>Follow the link to view my digital resume and/or download a copy. </b>             
          <i className="fa fa-arrow-right w3-hover-opacity"></i>
          </p>
          </Link>
              </div>
    </div>
  );
}
