import React from "react";
import { Link } from "react-router-dom";
import {motion } from 'framer-motion';
import TextTransition, {presets} from "react-text-transition";
import Subscribe from '../components/Subscribe';
import Button from 'react-bootstrap/Button';
import SocialIcons from '../components/SocialIcons';
import LocationView from "../assets/images/LocationView.png";
import Hit from "../assets/images/Baseball/Hit.png";
import Catch from "../assets/images/Baseball/Catch.png";
import about from '../assets/images/Baseball/about.png';   
import TopQuote from '../assets/images/Baseball/TopQuote.png';
import BottomQuote from '../assets/images/Baseball/BottomQuote.png';
import { MdOutlineStar } from "react-icons/md";

const TEXTS = [ 'EMPOWERING', 'TREMENDOUS', 'OUTSTANDING', 'ELITE', 'LEADING', 'UNDENIABLE','PRESENCE',];
  


function HomePage() {

const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(() =>

    setIndex(index => index + 1),
    3000
  );
  return () => clearTimeout(intervalId);
}
, []);

    return (
        <div className="home w3-black" id="home">
          <SocialIcons />
  <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="home"
        
        >
  
 {/*Start Page Content */}
 <div className="w3-content w3-padding">
 {/**Start page container */}
 <div className="w3-container">
   
     
   
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
            <b>PROFILE</b><span className='text-secondary'>|ME</span></div>
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
   <div className="">
   <h3 className=" w3-border-light-grey "><b>MOTOR</b>
    <span className='fw-light'> |PREFERENCE</span></h3>
  <p className="w3-margin-bottom">What is Motor Preference?</p>
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



        <br />
   <br />
   <br />
   <br />
    </div>
    </div> 
    </div>







{/***********************************************************************/}
{/**Start About Section*/}
<div id="about" className="about-section" style={{ backgroundColor: 'black', width: '100%' }}>
  <div className="w3-padding-large w3-padding-32 text-white">
    <div className="w3-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h1><b>ABOUT</b></h1>
          <h3><b>301</b><span className='fw-light'>|CATCHING</span> </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et voluptas tempora! Repellendus excepturi quod fuga blanditiis quos. Magnam ipsum, aut fuga assumenda magni totam voluptatibus reiciendis laboriosam nihil autem!</p>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <img src={about} alt="about" style={{ width: "100%" }}  className='w3-opacity w3-hover-opacity-off w3-greyscale'/>
        </div>
      </div>
      <br />
    </div>
    <hr />
    <div className="row w3-padding w3-grayscale">
      <div className="col-md-4">
        <div className="container">
          <h3><b>OUR</b><span className="text-secondary">VISION.</span></h3>
          <p style={{ fontSize: '14px' }}>Driven by a visionary outlook, our approach to real estate is refreshingly distinct. Unlike conventional definitions of luxury that prioritize size and paid amenities, our vision is centered around the notion of uniqueness. For us, luxury properties are not merely defined by their grandeur, but by their exceptional qualities and unparalleled character. It's this emphasis on individuality and exclusivity that sets their projects apart in a crowded marketplace.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="container ">
          <h3><b>OUR</b><span className="text-secondary">PASSION.</span></h3>
          <p style={{ fontSize: '14px' }}>Our passion lies in uncovering hidden gems, each property meticulously chosen for its ability to transport you to a world of unparalleled tranquility and opulence. Whether you seek the solace of a high-end cabin enveloped by nature's embrace, the serenity of a she shed designed for refined relaxation, or the rustic charm of a barn transformed into a luxurious abode, Peasant Properties is your gateway to an extraordinary living experience.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="container">
          <h3><b>OUR</b><span className="text-secondary">COMMITMENT.</span></h3>
          <p style={{ fontSize: '14px' }}>We pledge and commitment to personalized service and an unwavering dedication to excellence, we strive to make your dream of owning a unique sanctuary a reality. Trust in Peasant Properties to guide you on a journey to discover the extraordinary, where luxury meets seclusion and exclusivity knows no bounds. Welcome to a world where every property tells a story, and your next chapter begins with us.</p>
        </div>
      </div>
    </div>
    <hr />
    {/* Start About Grid */}
    <div className="w3-content w3-container  w3-margin-bottom ">
    <img src={TopQuote} alt="topquote" style={{ width: "100%", marginBottom:'0px',  paddingBottom:'0px' }}/>
    <h1 className="text-center" style={{fontSize:'2.5rem'}}><b>OUR</b><span className="text-secondary">|REPUTATION.</span></h1>
   </div>
  
   <div className="d-flex flex-column align-items-center justify-content-center flex-wrap">
  <h1 style={{ fontSize: '2rem', color: 'red', display: 'inline-flex' }} className="text-center align-items-center">
    <b>301</b> <span className="text-secondary">|CATCHING.</span> <TextTransition springConfig={presets.gentle}>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  </h1>
  <p className="text-center"> What others have to say...</p>
</div>







{/* Start Testimonials Grid */}
 {/* Start Row 1 testimonials*/}

<div className="row w3-margin-bottom">
  {/* Start Img col before Joe*/}
<div className="col-lg-3 col-md-6  w3-margin-bottom w3-margin-top text-center p-1">
        <img src={Hit} alt="John" className="img-fluid  w3-grayscale" />
    </div>
     {/* End Start Img col before Joe*/}

     {/* Start Joe col*/}
    <div className="col-lg-3 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
        <header className="text-center" style={{ color: 'white', fontSize: '24px' }}>
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </header>
        <div className="w3-margin-top px-2">
            <p style={{ fontSize: '20px' }}>
              <i> “An <span style={{color:'red', fontWeight:'bolder'}}>ELITE</span> catching coach- Corey’s understanding and execution separates him from the pack."</i> 
            </p>
            <h5 className='w3-margin-top'>JOE SINGLEY <br /><span style={{fontSize:'14px'}}>Cincinnati Reds</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
                Asst Catching Coach|Bull Pen Catcher
            </p>
        </div>
    </div>
     {/* End Joe col*/}
       {/*Start Img col before Ryan*/}
    <div className="col-lg-3 col-md-6 w3-margin-bottom w3-margin-top text-center p-1">
        <img src={Hit} alt="John" className="img-fluid  w3-grayscale" />
    </div>
     {/*End Img col before Ryan*/}
    <div className="col-lg-3 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
        <header className="text-center " style={{ color: 'white', fontSize: '24px' }}>
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </header>
        <div className="w3-margin-top px-2">
            <p style={{ fontSize: '20px' }}>
            <i>"301 has a <span style={{color:'red', fontWeight:'bold'}}>TREMENDOUS PRESENCE</span> in the baseball community- Undeniable player development serves as a testament..."</i></p>
            <h5 className='w3-margin-top'>RYAN TERRILL <br /><span style={{fontSize:'14px', fontWeight:'bolder'}}>George Mason University</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
            Assistant Coach|Recruiting Coordinator
            </p>
        </div>
    </div>
    {/* End Ryan col*/}
</div>
 {/* End Row 1 testimonials*/}


{/* Start Row 2 testimonials*/}
<div className="row w3-margin-bottom">
  {/* Start Img col before John */}
<div className="col-lg-3 col-md-6 w3-margin-bottom w3-margin-top text-center p-1">
        <img src={Hit} alt="John" className="img-fluid  w3-grayscale" />
    </div>
     {/* End Start Img col before John */}

     {/* Start John col*/}
    <div className="col-lg-3 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
        <header className="text-center" style={{ color: 'white', fontSize: '24px' }}>
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </header>
        <div className="w3-margin-top px-2">
        <p style={{ fontSize: '20px' }}> <i>“301CATCHING is outstanding! <span style={{color:'red', fontWeight:'bolder'}}>EMPOWERING</span> catchers to seize every advantage..."</i></p>
        
            <h5 className='w3-margin-top'>JOHN POSS<br /><span style={{fontSize:'14px', fontWeight:'bolder'}}>University of Maryland</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
            Assistant Coach|Recruiting Coordinator
            </p>
        </div>
    </div>
     {/* End John col*/}
       {/*Start Img col before Guy*/}
    <div className="col-lg-3 col-md-6 w3-margin-bottom w3-margin-top text-center p-1">
        <img src={Hit} alt="Guy" className="img-fluid" />
    </div>
     {/*End Img col before Guy*/}
      {/*Start Guy col*/}
    <div className="col-lg-3 col-md-6  w3-grayscale-min w3-margin-bottom w3-margin-top text-center p-1">
        <header className="text-center" style={{ color: 'white', fontSize: '24px' }}>
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
            <MdOutlineStar className="mx-1" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor:'red', borderRadius: '2px' }} />
        </header>
        <div className="w3-margin-top px-2">
            <p style={{ fontSize: '20px' }}>
               <i> “301 Catching stands as a <span style={{color:'red', fontWeight:'bolder'}}>LEADING CATCHING PROGRAM </span>in the mid-Atlantic area..."</i>
            </p>
            <h5 className='w3-margin-top'>GUY SMITH<br /><span style={{fontSize:'14px'}}>Huntingtown HS</span></h5>
            <p className="w3-opacity" style={{fontSize:'14px'}}>
            5-Tool|Former UMD Pitcher
            </p>
        </div>
    </div>
    {/* End Guy col*/}
</div>
 {/* End Row 2 testimonials*/}



    <div className="w3-content w3-container  w3-margin-bottom ">
    <img src={BottomQuote} alt="topquote" style={{ width: "100%", marginBottom:'0px',  paddingBottom:'0px' }}/>
    </div>
    <h1 className="text-center w3-padding-16" style={{fontSize:'2rem'}}><b>MOTOR</b><span className="text-secondary">|PREFERENCES.</span></h1>
    <div className="container text-align d-flex justify-content-center align-items-center flex-wrap">
<div className="row">
<div className="col-sm-12 col-md-3 col-lg-2"></div>
<div className="col-sm-12 col-md-4 col-lg-4">
  <div className="justify-content-center">
  <p className="text-center"> Click Start Now To Schedule a Profile Evaluation.</p>
   <button className="w3-button w3-red w3-section mx-1" style={{ boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)', width:'100%' }}>
      <b>START NOW</b><i className="fas fa-angle-double-right w3-margin-left"></i>
    </button>
   </div>
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4">
  <div className="justify-content-center">
  <p className="text-center"> Have Questions? Click Learn more to get the answers. </p>
      <button className="w3-button w3-red w3-section mx-1" style={{ boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)', width:'100%' }}>
      <b>LEARN MORE</b><i className="fas fa-angle-double-right w3-margin-left"></i>
    </button>
   </div>
    </div>
    <div className="col-sm-12 col-md-2 col-lg-2"></div>
</div>
</div>

   <br />
  
  </div>
</div>

{/**End About Grid */}
{/**End About Section */}
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
  
   {/*End Page Container */}
   
 {/*End Page Content */}
{/*Start Footer*/}
<Subscribe/>

   

</motion.div>
</div>

    );
};

export default HomePage;