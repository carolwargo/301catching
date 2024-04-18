import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

import Corey from '../assets/images/Baseball/Corey.png';
import LocationView from '../assets/images/LocationView.png';
import TopQuote from '../assets/images/Baseball/TopQuote.png';
//import Hit from '../assets/images/Baseball/Hit.png';
import { MdOutlineStar } from "react-icons/md";


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
              <img src={Corey} className="w3-round w3-image w3-grayscale-max w3-opacity w3-hover-opacity-off mx-auto d-block" alt="Me" width="500" height="333" />
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
          </div>
  <br />
 <br />
</div>
<br />
</div>
{/**End technical proficiencies */}


<div className="container w3-margin-bottom w3-grayscale">

 {/* Start Testimonials Grid */}
 {/* Start Row 1 testimonials*/}

<div className="row w3-margin-bottom">

     {/* Start Joe col*/}
    <div className="col-lg-6 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
    <div className="card">
        <div className="card-header text-center" style={{ color: 'white', fontSize: '24px' }}>
          <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </div>
        <div className="card-body w3-margin-top px-4">
            <p style={{ fontSize: '14px' }}>
            “ Being an elite catching coach requires a unique combination of skill and personality to interact with different people and talents. With the selfless goal to better the mind, Corey’s understanding and execution of this is what separates him from the pack.</p>
            <h5 className='w3-margin-top'>JOE SINGLEY <br /><span style={{fontSize:'14px'}}>Cincinnati Reds</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
                Asst Catching Coach|Bull Pen Catcher
            </p>
        </div>
        </div>
    </div>
     {/* End Joe col*/}
  
    <div className="col-lg-6 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
    <div className="card">
        <div className="card-header text-center" style={{ color: 'white', fontSize: '24px' }}>
          <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </div>
        <div className="card-body w3-margin-top px-4">
            <p style={{ fontSize: '14px' }}>
            301 has a tremendous presence in the baseball community. The undeniable progress in player development serves as a testament. While their training consistently yields high-level results, it's the caliber of individuals he molds into champions that is held in my highest regard."</p>
            <h5 className='w3-margin-top'>RYAN TERRILL <br /><span style={{fontSize:'14px', fontWeight:'bolder'}}>George Mason University</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
            Assistant Coach|Recruiting Coordinator
            </p>
        </div>
    </div>
    </div>
    {/* End Ryan col*/}
</div>
 {/* End Row 1 testimonials*/}


{/* Start Row 2 testimonials*/}
<div className="row w3-margin-bottom">

     {/* Start John col*/}
    <div className="col-lg-6 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
    <div className="card">
        <div className="card-header text-center" style={{ color: 'white', fontSize: '24px' }}>
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </div>
        <div className="card-body w3-margin-top px-4">
        <p className='mb-0' style={{fontSize:'14px'}}>
        <i>Corey is an outstanding catching instructor. 
He excels at adapting his approach to suit the individual Player. His understanding of the subtleties of catching allow him to impart a high-level focus on technique and instinct. Corey empowers catchers to seize every advantage. His approach is direct and instruction is visual.</i></p>
            <h5 className='w3-margin-top'>JOHN POSS<br /><span style={{fontSize:'14px', fontWeight:'bolder'}}>University of Maryland</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
            Assistant Coach|Recruiting Coordinator
            </p>
        </div>
    </div>
    </  div>
     {/* End John col*/}
 
      {/*Start Guy col*/}
    <div className="col-lg-6 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
        <div className="card">
        <div className="card-header text-center" style={{ color: 'white', fontSize: '24px' }}>
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </div>
        <div className="card-body w3-margin-top px-4">
            <p style={{ fontSize: '14px' }}>
               <i> “301 Catching stands as one of the leading instructional catching programs in the mid-Atlantic area. Surpassing the “industry norms” and incessantly exploring new & innovative techniques that empower players to thrive both mentally & physically, on and off the field."</i>
            </p>
            <h5 className='w3-margin-top'>GUY SMITH<br /><span style={{fontSize:'14px'}}>Huntingtown HS</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
            5-Tool|Former UMD Pitcher
            </p>
        </div>
        </div>
    </div>
    {/* End Guy col*/}
</div>
 {/* End Row 2 testimonials*/}
  </div>
{/**End testimonials */}

    <div className="w3-content w3-container  w3-margin-bottom ">
    <img src={TopQuote} alt="topquote" style={{ width: "100%", marginBottom:'0px',  paddingBottom:'0px' }}/>
    <h1 className="text-center w3-padding-16" style={{fontSize:'2.5rem'}}><b>MOTOR</b><span className="text-secondary">|PREFERENCES.</span></h1>
    </div>


 



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
    <p>Days of Operation: <br />Sunday-Saturday: By Appointment Only
    <br/> Schedule today! 
    </p>
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
