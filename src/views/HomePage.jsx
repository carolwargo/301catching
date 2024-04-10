import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import BBSocialIcons from '../components/Baseball/BBSocialIcons';
import LocationView from "../assets/images/LocationView.png";
import Hit from "../assets/images/Baseball/Hit.png";
import Catch from "../assets/images/Baseball/Catch.png";
import about from '../assets/images/Baseball/about.png';
import Certified from '../assets/images/Baseball/Certified.png';    
import TopQuote from '../assets/images/Baseball/TopQuote.png';


function HomePage() {
    return (
        <div className="home w3-black" id="home">
 {/*Start Page Content */}
 <div className="w3-content w3-padding">
 {/**Start page container */}
 <div className="w3-container">
    <div className="">
      <BBSocialIcons />
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
    </div>

{/**Start Barn Builds */}
<div id="sheds"> 
<hr/>   
    <div className="w3-row-padding">
    <div className="w3-display-container w3-padding">
    <h4><b>TRAIN</b><span className="fw-light">|301</span></h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit natus facere veritatis blanditiis saepe voluptate velit molestias quasi. Fugit quae delectus inventore eius aliquam natus voluptas minus nulla voluptatum?</p>
        </div>
    <div className="w3-display-container w3-padding">
    <div className="w3-col l3 m6 w3-margin-bottom ">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Frame</div>
        <img src={Catch} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Throw</div>
        <img src={Hit} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Block</div>
        <img src={Catch} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    
  
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Catch</div>
        <img src={Hit} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

   
    <div className="border-bottom border-top shadow w3-padding-large">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-8 col-lg-8 px-2">
  <h4><b>Title</b></h4>  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui 
    exercitationem doloribus totam itaque? Velit soluta ea dolores 
    molestias pariatur reiciendis maxime nostrum. Distinctio possimus 
    sed consequatur reprehenderit repudiandae velit 
    <span>   
        <Link to="/" 
        className="link-primary justify-content-end text-decoration-none"> 
        learn more...</Link>
        </span>
        </p> 
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
</div>
</div>
</div>
{/**End Barn Builds */}
<br />


{/**End We Shed */} 
{/**End Projects Section */}










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
          <img src={about} alt="about" style={{ width: "100%" }}  className='w3-opacity w3-hover-opacity-off'/>
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
    <div className="w3-row-padding d-flex justify-content-center">
 
    <img src={TopQuote} alt="topquote" style={{ width: "80%" }} />

</div>

     {/* Start About Grid */}
    <div className="w3-row-padding w3-margin-bottom w3-grayscale">
      <h3 className="text-center"><b>OUR</b><span className="text-secondary">|REPUTATION.</span></h3>
      <div className="w3-col l3 m6 w3-margin-bottom w3-margin-top" style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'}}>
        <img src={Hit} alt="John" style={{ width: "100%" }} />
        <h4>JOHN POSS <br /><span style={{fontSize:'18px'}}>University of Maryland</span></h4>
        <p className="w3-opacity">
Assistant Coach|Recruiting Coordinator</p>
        <p style={{ fontSize: '14px' }}>“Corey is an outstanding catching instructor. He empowers catchers to seize every advantage. His approach is direct and instruction is visual. I'm appreciative of the friendship and have the uptmost confidence in Corey’s ability to provide knowledgeable assitance."</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom w3-margin-top" style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'}}>
        <img src={Hit} alt="Jane" style={{ width: "100%" }} />
        <h4>GUY SMITH <br /><span style={{fontSize:'18px'}}>Huntingtown High School</span></h4>
        <p className="w3-opacity">
5-Tool|Former UMD Pitcher</p>
        <p style={{ fontSize: '14px' }}>“301 Catching stands as one of the leading instructional catching programs in the mid-Atlantic area, surpassing “industry norms” and incessantly exploring new & innovative techniques thatempower players to thrive both mentally & physically, on and off the field. ”</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom w3-margin-top" style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'}}>
        <img src={Hit} alt="Mike" style={{ width: "100%" }} />
        <h4>RYAN TERRILL <br /><span style={{fontSize:'18px'}}>George Mason University</span></h4>
        <p className="w3-opacity">
Assistant Coach|Recruiting Coordinator</p>
        <p style={{ fontSize: '14px' }}>"Coach Wargo has a tremendous presence in the baseball community. The undeniable progress in player development serves as a testament to his expertise. While his training consistently yields high-level results, it's the caliber of individuals he molds into champions that is held in my highest regard."</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom w3-margin-top" style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'}}>
        <img src={Hit} alt="Dan" style={{ width: "100%" }} />
        <h4>JOE SINGLEY <br /><span style={{fontSize:'18px'}}>Cincinatti Reds</span></h4>
        <p className="w3-opacity">
        Asst Catching Coach|Bull Pen Catcher</p>
        <p style={{ fontSize: '14px' }}>“ Being an elite catching 
coach requires a unique combination of skill and personality to interact with different people and talents. With the selfless goal to better the mind, Corey’s understanding and execution of this is what separates him from the pack."</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
    </div>
  </div>
</div>

{/**End About Grid */}
{/**End About Section */}
<div className="w3-container w3-padding-48" id="contact">
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
  <h3 className="w3-border-light-grey w3-padding-8">WHERE WE TRAIN | WHERE WE ARE LOCATED</h3>
  
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

export default HomePage;