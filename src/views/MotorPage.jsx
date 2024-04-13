import React from "react";
import { Link } from "react-router-dom";
import LocationView from "../assets/images/LocationView.png";
import about from "../assets/images/Baseball/about.png";
import Certified from "../assets/images/Baseball/Certified.png";
//import Catch from '../assets/images/Baseball/Catch.png';
//import Hit from "../assets/images/Baseball/Hit.png";
import TopQuote from "../assets/images/Baseball/TopQuote.png";
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
    <div className="w3-black">
      <div className="w3-container w3-padding-top-64 ">
      
        <div className="row ">
          <div className="col-sm-12 col-md-4 col-lg-4 flex-column justify-content-center align-items-center">
            <img src={MPTransparent} alt="MPTransparent" style={{ width: "100%" }} />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column justify-content-start">
  
</div>

        </div>
      
        <div className="row py-3 justify-content-center align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4 flex-column w3-margin-top">
            <nav id="navbar-webdev" className="h-100 ">
           
                <nav className="nav flex-column">
                  <button className="w3-button w3-blue text-white rounded mt-1 py-4 w3-xlarge fw-bold" type="button" onClick={() => handleButtonClick("item-1")}>
                    <i className="fas fa-info-circle"></i> OVERVIEW
                  </button>
                  <button className="w3-button w3-blue text-white rounded mt-1 py-4 w3-xlarge fw-bold" type="button" onClick={() => handleButtonClick("item-2")}>
                    <i className="fas fa-thumbs-up"></i> BENEFITS
                  </button>
                  <button className="w3-button w3-blue text-white rounded mt-1 py-4 w3-xlarge fw-bold" type="button" onClick={() => handleButtonClick("item-3")}>
                    <i className="fas fa-flask"></i> SCIENCE
                  </button>
                  <button className="w3-button w3-blue text-white rounded mt-1 py-4 w3-xlarge fw-bold" type="button" onClick={() => handleButtonClick("item-4")}>
                    <i className="fas fa-user-circle"></i> TESTIMONIALS
                  </button>
                  <button className="w3-button w3-blue text-white rounded mt-1 py-4 w3-xlarge fw-bold" type="button" onClick={() => handleButtonClick("item-5")}>
                    <i className="fas fa-play"></i> START NOW
                  </button>
                </nav>
             
            </nav>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8  w3-margin-top flex-column">
          <div className="p-2 bg-secondary-subtle shadow rounded-2 border border-secondary-subtle margin">
            <div
              className="scrollspy-webdev w3-white"
              style={{
                height: "410px",
                width: "auto",
                overflowY: "scroll",
                WebkitOverflowScrolling: "touch",
              }}
            >
              
              <div className="container w3-padding-large border-black w3-margin-bottom" style={{ marginBottom: "20px"}}>
              {/**Start social icons*/}
              <div className="motor-socials" id="motor-socials">
    <div className="motor-sticky-social-icons d-flex justify-content-start">
   <Link to='/contact' style={{paddingRight:'3px'}}>
    <button
                  className="w3-button w3-black w3-section shadow"
                  type="submit"
                >
                 GET STARTED
                </button>
                </Link> 

                <a href='mailto:301catching@gmail.com' 
                style={{paddingRight:'3px'}}>
                  <button
                  className="w3-button w3-black w3-section shadow"
                  type="submit"
                >
                  <i className="fas fa-envelope"></i> 
                </button>
                </a> 
                <a href="/" style={{paddingRight:'3px'}}>
                  <button
                  className="w3-button w3-black w3-section shadow"
                  type="submit"
                >
                  <i className="fab fa-twitter"></i> 
                </button>
                </a> 
                <a href='mailto:301catching@gmail.com' style={{paddingRight:'3px'}}><button
                  className="w3-button w3-black w3-section shadow"
                  type="submit"
                >
                    <i className="fab fa-instagram"></i> 
                </button>
                </a> 
    
    </div>
  </div>
  <p>Click topic or scroll to learn more...</p>
              <hr
                className="w3-margin-top"
                style={{ height: "4px", backgroundColor: "black" }}
              />
              {/**End social icons*/}



              {/**Start Content*/}
              {/**Start Intro */}
              <div id="item-1">
                <h2 className=" w3-border-light-grey text-primary">
                  <b>MOTOR PREFERENCES</b>
                </h2>
                <h6 className="fw-light">
                  <i>"A REVOLUTIONARY STANDARD FOR ATHLETE CARE."</i>
                </h6>
                <h4 className=" w3-border-light-grey w3-padding-top-24">
                  <b className="text-primary">OVERVIEW</b>
                </h4>
                <p className="w3-grayscale ">
                  "Health & Fitness professionals alike are witnessing a
                  scientifically validated revolution. This transformation is
                  fundamentally reshaping the way we approach athlete care and
                  preparation, marking a significant evolution in injury
                  prevention, rehabilitation, and athletic performance."
                </p>

                <h5>WHAT THE PROS SAY</h5>
                <p>
                  In the business world, the heartbeat of success resonates with
                  productivity, and at its very core lies the indispensable
                  concept of <b>efficiency</b>.<br></br>
                  <b>Efficiency</b> -
                  <i>"making the most of our time & resources"</i> , is crucial
                  in any type of success, right? A website is no different- An{" "}
                  <i>
                    efficient” site will allow you to “make the most of your
                    time & resources
                  </i>
                  ”. A well developed website will quite literally replace
                  administrative need, eliminate repetition, keep you organized,
                  conduct analysis, and generate “passive income”.
                </p>
                <br></br>
                <p>
                  Sound too good to be true? <b>IT'S NOT</b>! <br></br>
                </p>

                <div className="card">
                  <div className="w3-container">
                    <p className="mb-1">
                      Continue reading to discover more, or reach out to us by
                      visiting our <a href="/contact">contact</a> page to
                      connect with a skilled and knowledgeable designer who can
                      offer a personalized experience tailored to your
                      individual needs and preferences."{" "}
                    </p>
                    <button className="btn-large btn-black"></button>
                  </div>
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




              {/*START BENEFIT*/}
              <div id="item-1">
                <h1 className=" w3-border-light-grey ">
                  <b className="text-primary">PROFILE</b>
                  <span className="fw-regular text-primary">BENFITS</span>
                </h1>
                <h5 className="fw-light">
                  <i>"A REVOLUTIONARY STANDARD FOR ATHLETE CARE & TRAINING."</i>
                </h5>
                <p className="w3-grayscale w3-padding-24">
                  "Health & Fitness professionals alike are witnessing a
                  scientifically validated revolution. This transformation is
                  fundamentally reshaping the way we approach athlete care and
                  preparation, marking a significant evolution in injury
                  prevention, rehabilitation, and athletic performance."
                </p>

                <h5>WHAT THE PROS SAY</h5>
                <p>
                  In the business world, the heartbeat of success resonates with
                  productivity, and at its very core lies the indispensable
                  concept of <b>efficiency</b>.<br></br>
                  <b>Efficiency</b> -
                  <i>"making the most of our time & resources"</i> , is crucial
                  in any type of success, right? A website is no different- An{" "}
                  <i>
                    efficient” site will allow you to “make the most of your
                    time & resources
                  </i>
                  ”. A well developed website will quite literally replace
                  administrative need, eliminate repetition, keep you organized,
                  conduct analysis, and generate “passive income”.
                </p>
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
                    <h4 className="m-1" style={{ fontFamily: "belotta text" }}>
                      <b>VOLODALEN</b>
                    </h4>
                  </div>
                  <p className="p-2">
                    {" "}
                    Volodalen is a training organization and a research
                    laboratory on movement, dedicated to Natural Motor
                    Preferences®. The Volodalen team is made up of researchers,
                    engineers, trainers, health and sports professionals.
                  </p>
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
            </div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      {/*end nav scroll*/}











      {/***********************************************************************/}
      {/**Start About Section*/}
      <div
        id="about"
        className="about-section"
        style={{ backgroundColor: "black", width: "100%" }}
      >
        <div className="w3-padding-large w3-padding-32 text-white">
          <div className="w3-container">
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <h1>
                  <b>ABOUT</b>
                </h1>
                <h3>
                  <b>301</b>
                  <span className="fw-light">|CATCHING</span>{" "}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis et voluptas tempora! Repellendus excepturi quod
                  fuga blanditiis quos. Magnam ipsum, aut fuga assumenda magni
                  totam voluptatibus reiciendis laboriosam nihil autem!
                </p>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 w3-grayscale-max">
                <img
                  src={about}
                  alt="about"
                  style={{ width: "100%" }}
                  className="w3-opacity w3-hover-opacity-off"
                />
              </div>
            </div>
            <br />
          </div>
          <hr />
          <div className="row w3-padding w3-grayscale">
            <div className="col-md-4">
              <div className="container">
                <h3>
                  <b>OUR</b>
                  <span className="text-secondary">VISION.</span>
                </h3>
                <p style={{ fontSize: "14px" }}>
                  Driven by a visionary outlook, our approach to real estate is
                  refreshingly distinct. Unlike conventional definitions of
                  luxury that prioritize size and paid amenities, our vision is
                  centered around the notion of uniqueness. For us, luxury
                  properties are not merely defined by their grandeur, but by
                  their exceptional qualities and unparalleled character. It's
                  this emphasis on individuality and exclusivity that sets their
                  projects apart in a crowded marketplace.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="container ">
                <h3>
                  <b>OUR</b>
                  <span className="text-secondary">PASSION.</span>
                </h3>
                <p style={{ fontSize: "14px" }}>
                  Our passion lies in uncovering hidden gems, each property
                  meticulously chosen for its ability to transport you to a
                  world of unparalleled tranquility and opulence. Whether you
                  seek the solace of a high-end cabin enveloped by nature's
                  embrace, the serenity of a she shed designed for refined
                  relaxation, or the rustic charm of a barn transformed into a
                  luxurious abode, Peasant Properties is your gateway to an
                  extraordinary living experience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="container">
                <h3>
                  <b>OUR</b>
                  <span className="text-secondary">COMMITMENT.</span>
                </h3>
                <p style={{ fontSize: "14px" }}>
                  We pledge and commitment to personalized service and an
                  unwavering dedication to excellence, we strive to make your
                  dream of owning a unique sanctuary a reality. Trust in Peasant
                  Properties to guide you on a journey to discover the
                  extraordinary, where luxury meets seclusion and exclusivity
                  knows no bounds. Welcome to a world where every property tells
                  a story, and your next chapter begins with us.
                </p>
              </div>
            </div>
          </div>
          <hr />
          {/* Start About Grid */}
          <div className="w3-content w3-container  w3-margin-bottom ">
            <img
              src={TopQuote}
              alt="topquote"
              style={{
                width: "100%",
                marginBottom: "0px",
                paddingBottom: "0px",
              }}
            />
            <h1 className="text-center" style={{ fontSize: "2.5rem" }}>
              <b>OUR</b>
              <span className="text-secondary">|REPUTATION.</span>
            </h1>
            <br />
          </div>

          {/* Start Testimonials Grid */}
        
     
          <div className="w3-content w3-container  w3-margin-bottom ">
            <img
              src={TopQuote}
              alt="topquote"
              style={{
                width: "100%",
                marginBottom: "0px",
                paddingBottom: "0px",
              }}
            />
       
          </div>
        </div>
     

      {/**End About Grid */}
      {/**End About Section */}
      <div className="w3-container w3-padding-48 w3-white" id="contact">
        <div className="w3-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-bottom">
            <div className="container">
              <h1 className="w3-border-light-grey w3-padding-16">
                <b>CONTACT</b>US
              </h1>
              <p>READY TO GET START!</p>

              <form action="/action_page.php" target="_blank">
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
                <input
                  className="w3-input w3-section w3-border"
                  type="text"
                  placeholder="Subject"
                  required
                  name="Subject"
                />
                <input
                  className="w3-input w3-section w3-border"
                  type="text"
                  placeholder="Comment"
                  required
                  name="Comment"
                />
                <button
                  className="w3-button w3-light-gray w3-section"
                  type="submit"
                >
                  <i className="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-bottom">
            <div className="container">
              <h3 className="w3-border-light-grey w3-padding-8 w3-margin-bottom">
                WHERE WE OPERATE!
              </h3>

              <img
                src={LocationView}
                className="w3-image"
                alt="location-map"
                style={{ width: "100%" }}
              />
              <div className="w3-margin-top">
                <p>
                  Hours of Operation: <br />
                  Monday-Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday-Sunday: Closed
                </p>
              </div>
            </div>
            </div>
             </div>
          </div>
        </div>
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
  );
};

export default Motor;
