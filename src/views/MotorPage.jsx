import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import Certified from "../assets/images/Baseball/Certified.png";
import Partner from "../assets/images/Baseball/Partner.webp";
//import Catch from '../assets/images/Baseball/Catch.png';
//import Hit from "../assets/images/Baseball/Hit.png";
import MPTransparent from "../assets/images/Baseball/MPTransparent.png";
import Lab from "../assets/images/Baseball/Lab.png";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Motor = () => {
  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
    <div className="motor" id="motor">
      <div className="w3-container w3-padding-top-64 ">
      <div className="row py-3 
       align-items-end shadow">
        <div className="col-sm-12 col-md-4 col-lg-4 justify-content-center">
          <img src={MPTransparent} alt="MPTransparent" style={{ width: "100%" }} />
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column align-items-end">
  <div className="container justify-content-end">
    {/* Start social icons */}
    <div className="motor-socials" id="motor-socials">
      <div className="motor-sticky-social-icons d-flex justify-content-end">
        <a href='mailto:301catching@gmail.com' style={{paddingRight:'2px'}}>
          <button className="w3-button w3-blue w3-section" style={{padding:'5px 10px'}} type="submit">
            <i className="fas fa-envelope"></i> 
          </button>
        </a> 
        <a href="https://twitter.com/301Catching" style={{paddingRight:'2px'}}>
          <button className="w3-button w3-blue w3-section shadow" style={{padding:'5px 10px'}} type="submit">
            <i className="fab fa-twitter"></i> 
          </button>
        </a> 
        <a href="https://www.instagram.com/301_catching/" style={{paddingRight:'2px'}}>
          <button className="w3-button w3-blue w3-section shadow" style={{padding:'5px 10px'}} type="submit">
            <i className="fab fa-instagram"></i> 
          </button>
        </a> 
      </div>
    </div>
  </div>
</div>

  </div> 
              {/**End social icons*/}



              {/**Start Content*/}
              {/**Start Intro */}
              <div>
                <div className="row d-flex w3-margin-top">
                  <div className="col-sm-12 col-md-4 col-lg-4  flex-column ">
                  <div className="w3-padding-16">
          <div className="container w3-padding-large w3-padding-16 w3-light-grey shadow">
            <nav id="navbar-webdev" className="h-100 w3-margin-bottom">
                <nav className="nav flex-column ">
                <button className="w3-button w3-black mt-2  fw-bold" type="button" onClick={() => handleButtonClick("item-5")}>
                    CONTACT US
                  </button>
                  <hr />
                  <button className="w3-button w3-blue text-black  mt-1  fw-bold" type="button" onClick={() => handleButtonClick("item-1")}>
                    <i className="fas fa-info-circle"></i> OVERVIEW
                  </button>
                  <button className="w3-button w3-blue text-black  mt-1  fw-bold" type="button" onClick={() => handleButtonClick("item-2")}>
                    <i className="fas fa-thumbs-up"></i> BENEFITS
                  </button>
                  <button className="w3-button w3-blue text-black  mt-1  fw-bold" type="button" onClick={() => handleButtonClick("science")}>
                    <i className="fas fa-flask"></i> SCIENCE
                  </button>
                  <button className="w3-button w3-blue text-black  mt-1  fw-bold" type="button" onClick={() => handleButtonClick("item-4")}>
                    <i className="fas fa-user-circle"></i> TESTIMONIALS
                  </button>
                </nav>
            </nav>
            </div>
          </div>
          <div className="w3-padding-16">
          <div className="container w3-padding-large w3-light-grey shadow">
            <p className="w3-margin-top" style={{fontSize:'14px'}}> 
            <b className="text-primary" style={{fontSize:'16px'}}>READY TO GET STARTED?</b> 
            <br />Fill out the form below to either speak with an expert 
            or schedule an evaluation. </p>
             <form action="/action_page.php" target="_blank" className="w3-margin-top ">
               <input
                 className="w3-input w3-border"
                 type="text"
                 placeholder="Name"
                 required
                 name="Name"
               />
               <input
                 className="w3-input w3-section w3-border"
                 type="text"
                 placeholder="Email"
                 required
                 name="Email"
               />
             
             <div className="w3-section">
 <label className="w3-checkbox w3-margin-left">
   <input 
     type="checkbox" 
     name="question" 
     value="question"
     className="w3-check"
   />
  <span className="w3-margin-left" style={{fontSize:'14px'}}> I have questions.</span>
 </label>
</div>

<div className="w3-section w3-margin-left">
 <label className="w3-checkbox">
   <input 
     type="checkbox" 
     name="schedule" 
     value="schedule"
     className="w3-check"
   />
   <span className="w3-margin-left" style={{fontSize:'14px'}}> I want to be evaluated.</span>
 </label>
</div>
               <button
                 className="w3-button w3-black w3-section w3-margin-left"
                 type="submit"
               >
                 <i className="fa fa-paper-plane"></i> SUBMIT
               </button>
             </form>
                 </div>
                 </div>
                  </div>
                  <div className="col-sm-12 col-md-8">
                <h2 className=" w3-border-light-grey text-primary w3-padding-24">
                  <b>MOTOR PREFERENCES</b>
                </h2>
                <h5 className="fw-light">
                  <i>"A REVOLUTIONARY STANDARD FOR ATHLETE CARE & TRAINING."</i>
                </h5>
                <h3 className=" w3-border-light-grey w3-padding-top-24">
                  <b className="text-primary">OVERVIEW</b>
                </h3>
                <p className="w3-grayscale w3-margin-bottom">
                  "Health & Fitness professionals alike are witnessing a
                  scientifically validated revolution. This transformation is
                  fundamentally reshaping the way we approach athlete care and
                  preparation, marking a significant evolution in injury
                  prevention, rehabilitation, and athletic performance."
                </p>
      
                <hr className="w3-margin-top"/>
               {/**  <h5 className="fw-light">
                  <i>"THE SCIENCE OF THE BRAIN."</i>
                </h5>
                */}
                <h4 className=" w3-border-light-grey w3-padding-top-24">
                  <b className="text-primary">How do Motor Preferences work?</b>
                </h4>
                <p className="w3-grayscale ">The human brain is lateralized and has dominant areas that are used extensively to the detriment of other less used areas that are opposite to them. The use of the dominant brain areas will be natural while its opposite will require more effort.

</p>
<div className="row">
<h5 className="fw-light">
                  <i>"THE SCIENCE OF THE BRAIN."</i>
                </h5>
                <h4 className=" w3-border-light-grey w3-padding-top-24">
                  <b className="text-primary">How do Motor Preferences work?</b>
                </h4>
                <p className="w3-grayscale ">The human brain is lateralized and has dominant areas that are used extensively to the detriment of other less used areas that are opposite to them. The use of the dominant brain areas will be natural while its opposite will require more effort.

</p>
</div>
              
                <hr />



                <div className="w3-padding-top-24" id="science">
                <img src={Partner} alt="partner" style={{ width: "100%" }}/>
                <h5 className="text-center w3-padding-24">
                    {" "}
                    Volodalen is a training organization and a research
                    laboratory on movement, dedicated to Natural Motor
                    Preferences®. The Volodalen team is made up of researchers,
                    engineers, trainers, health and sports professionals.
                  </h5>
                  </div>
           
                <br></br>
                <br></br>
                <p>
                  "Two Foundational Components Needed To Maximize Efficiency..."
                </p>
                <h5>DATABASE & AUTH SERVICES WORKING TOGETHER</h5>
                <p>
                  Database and Authentication (auth) services work together, and
                  are the most important components to incorporate when
                  developing an efficient website or web application. Playing a
                  foundational role in ensuring security, organization, and
                  reliability of your site, and extention of your business.{" "}
                </p>
              </div>
              {/*END INTRO */}

              </div>
                </div>



              {/*START BENEFIT*/}
              <div id="item-1">
                <h1 className=" w3-border-light-grey ">
                  <b className="text-primary">PROFILE</b>
                  <span className="fw-regular text-primary">BENFITS</span>
                </h1>
             
                <br></br>
                <p>
                  Sound too good to be true? <b>IT'S NOT</b>! <br></br>
                </p>

                <div className="bg-secondary-subtle p-3 text-center">
                  <p className="mb-1">
                    Continue reading to discover more, or reach out to us by
                    visiting our <a href="/contact">contact</a> page to connect
                    with a skilled and knowledgeable designer who can offer a
                    personalized experience tailored to your individual needs
                    and preferences."{" "}
                  </p>
                </div>
                <br></br>
                <br></br>
                <p>
                  "Two Foundational Components Needed To Maximize Efficiency..."
                </p>
                <h5>DATABASE & AUTH SERVICES WORKING TOGETHER</h5>
                <p>
                  Database and Authentication (auth) services work together, and
                  are the most important components to incorporate when
                  developing an efficient website or web application. Playing a
                  foundational role in ensuring security, organization, and
                  reliability of your site, and extention of your business.{" "}
                </p>
              </div>
              {/*END BENEFIT*/}



              <p>
                ***********************************************************************************************************************
              </p>
              <div className="w3-container w3-padding-top-8">
                <div id="item-1">
                  <div className="w3-margin-bottom">
                    {/** <h3>By identifying an athlete's unconscious pattern of body movements and strengths, we design a Motor Preferences profile.</h3>
    <h3 className='fw-light'>A scientifically backed revolution that transforms how we approach athlete care, prevention, and training.  </h3> */}
                  </div>
                  <div className="bg-dark p-2 text-white text-center">
                    <p className="m-1">WHERE DID IT COME FROM?</p>
                  
                  </div>
                
                  <img src={Lab} alt="Lab" style={{ width: "100%" }} />
                  They are all at the top of the world in their sport. They have
                  used or are calling on Volodalen's expertise for their
                  performance and/or health. Each year, 200 professional
                  athletes in 40 disciplines, at the top of their sport, are
                  analysed, advised and monitored by Volodalen in accordance
                  with their motor preferences.
                  <h3 style={{ fontFamily: "belotta text" }}>
                    <b>What is Motor Preference?</b>
                  </h3>
                  <p>
                    Our expertise is to match this profile with the sports
                    athleticism guidelines by adjusting mechanics in the respect
                    of each individuals preferences. This approach significantly
                    reduces the risk of injury, increases performance and career
                    longevity.
                  </p>
                  <br></br>
                  <p>
                    "Doloremque accusamus odio beatae nam nobis, dicta et, totam
                    unde aspernatur tempora, voluptatum minima iste quo."
                  </p>
                  <h5>Lorem ipsum dolor</h5>
                  <p>
                    In the business world, the heartbeat of success resonates
                    with productivity, and at its very core lies the
                    indispensable concept of <b>efficiency</b>.<br></br>
                    <b>Efficiency</b> -
                    <i>"making the most of our time & resources"</i> , is
                    crucial in any type of success, right? A website is no
                    different- An{" "}
                    <i>
                      efficient” site will allow you to “make the most of your
                      time & resources
                    </i>
                    ”. A well developed website will quite literally replace
                    administrative need, eliminate repetition, keep you
                    organized, conduct analysis, and generate “passive income”.
                  </p>
                  <br></br>
                  <p>
                    Sound too good to be true? <b>IT'S NOT</b>! <br></br>
                  </p>
                  <div className="w3-black p-3 text-center">
                    <p className="mb-1">
                      Continue reading to discover more, or reach out to us by
                      visiting our <a href="/contact">contact</a> page to
                      connect with a skilled and knowledgeable designer who can
                      offer a personalized experience tailored to your
                      individual needs and preferences."{" "}
                    </p>
                  </div>
                  <br></br>
                  <br></br>
                  <p>
                    "Two Foundational Components Needed To Maximize
                    Efficiency..."
                  </p>
                  <h5>DATABASE & AUTH SERVICES WORKING TOGETHER</h5>
                  <p>
                    Database and Authentication (auth) services work together,
                    and are the most important components to incorporate when
                    developing an efficient website or web application. Playing
                    a foundational role in ensuring security, organization, and
                    reliability of your site, and extention of your business.{" "}
                  </p>
                </div>
              </div>
              <br></br>
              <br></br> <br></br>
              <br></br>
              <p>
                *******************************************************************************
              </p>
              <p>
                By implementing a Database & Authentication Services into your
                new or existing site, your website will achieve efficiency
                standards needed to allow you{" "}
                <i>" to make the most of your time & resources "</i>.
              </p>
              {/*end db & auth*/}
              <br></br>
              <br></br>
              {/*start db */}
              <div id="item-1-1" className=" border-bottom">
                <br></br>
                <div>
                  <div id="item-1-1-1">
                    <p className="text-secondary">
                      "Benefits & Impact of having a database."
                    </p>
                    <h5>
                      <b>DATABASE BENEFITS & IMPACT CHART</b>
                    </h5>
                    <p>
                      Integrating a database into a business can offer a wide
                      range of benefits, positively impacting various aspects of
                      operations, decision-making, and overall efficiency. Here
                      are several advantages of integrating a database into a
                      business:
                    </p>
                  </div>
                </div>

                <div id="item-1-1-2">
                  <p>"Examples & Scenarios"</p>
                </div>

                <div id="item-1-1-3">
                  <p>"Project Overview: Build Process, Timeframe, and Cost"</p>
                </div>
              </div>
              {/*end db */}
           
            
         
    



      <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4 flex-column">
          <div className="container w3-padding-large w3-light-grey shadow">
            
            <p className="w3-margin-top" style={{fontSize:'12px'}}> <b className="text-primary">READY TO GET STARTED?</b> <br />Fill out the form below to either speak with an expert or schedule an evaluation. </p>
             

             <form action="/action_page.php" target="_blank" className="w3-margin-top ">
               <input
                 className="w3-input w3-border"
                 type="text"
                 placeholder="Name"
                 required
                 name="Name"
               />
               <input
                 className="w3-input w3-section w3-border"
                 type="text"
                 placeholder="Email"
                 required
                 name="Email"
               />
             
             <div className="w3-section">
 <label className="w3-checkbox w3-margin-left">
   <input 
     type="checkbox" 
     name="question" 
     value="question"
     className="w3-check"
   />
  <span className="w3-margin-left" style={{fontSize:'14px'}}> I have questions.</span>
 </label>
</div>

<div className="w3-section w3-margin-left">
 <label className="w3-checkbox">
   <input 
     type="checkbox" 
     name="schedule" 
     value="schedule"
     className="w3-check"
   />
   <span className="w3-margin-left" style={{fontSize:'14px'}}> I want to be evaluated.</span>
 </label>
</div>
               <button
                 className="w3-button w3-black w3-section w3-margin-left"
                 type="submit"
               >
                 <i className="fa fa-paper-plane"></i> SUBMIT
               </button>
             </form>
                 </div>
</div>
<div className="col-sm-12 col-md-8 col-lg-8 flex-column">
</div>
</div>
<br />
</div>











      {/*End Page Container */}

      {/*End Page Content */}
      {/*Start Footer*/}
      <footer className="w3-center w3-padding-16">
        <img src={Certified} alt="logo" style={{ width: "100px" }} />
        <p>
          Powered by{" "}
          <Link to="/" title="301link" className="w3-hover-text-green">
            <b>301</b>CATCHING.COM
          </Link>
        </p>
      </footer>
    </div>
    </motion.div>
  );
};

export default Motor;
