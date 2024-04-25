import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GuyPic2 from 'assets/images/Baseball/GuyPic2.png';
import JoePic2 from 'assets/images/Baseball/JoePic2.png';
import JohnPic2 from 'assets/images/Baseball/JohnPic2.png';
import { MdOutlineStar } from 'react-icons/md';
import Hit from 'assets/images/Baseball/Hit.png';



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
<div className="testimonials">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={JoePic2}
          alt="Joe Singley"
        />
        <Carousel.Caption>
          <h3>JOE SINGLEY</h3>
          <h5>Cincinatti Reds</h5>
          <p>Assistant Catching Coach | Bullpen Catcher</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GuyPic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={JohnPic2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 {/* Start Testimonials Grid */}
 {/* Start Row 1 testimonials*/} 
 <div className="container w3-margin-bottom w3-grayscale">
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

 <h1>SET NUMBER 2 START</h1>
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

<h1>SET NUMBER 3 START</h1>
 {/* End Row 2 testimonials*/}
 <div className="w3-row-padding w3-margin">
      <h3 className="text-center"><b>OUR</b><span 
      className="text-secondary">|REPUTATION.</span></h3>
      <div className="w3-col l4 m4">
      <div style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'}}>
        <img src={Hit} alt="John" style={{ width: "100%" }} />
        <h4>JOHN POSS <br /><span style={{fontSize:'18px'}}>University of Maryland</span></h4>
        <p className="w3-opacity">
Assistant Coach|Recruiting Coordinator</p>
        <p style={{ fontSize: '14px' }}>“Corey is an outstanding catching instructor. 
        He empowers catchers to seize every advantage. His approach is direct and instruction 
        is visual. I have the uptmost confidence in Corey’s ability to provide knowledgeable 
        assitance."</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      </  div>

      <div className="w3-col l4 m4" >
        <div style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'}}>
        <img src={Hit} alt="Jane" style={{ width: "100%" }} />
        <h4>GUY SMITH <br /><span style={{fontSize:'18px'}}>Huntingtown High School</span></h4>
        <p className="w3-opacity">
5-Tool|Former UMD Pitcher</p>
        <p style={{ fontSize: '14px' }}>“301 Catching stands as one of the leading instructional 
        catching programs in the mid-Atlantic area, surpassing “industry norms” and incessantly 
        exploring new & innovative techniques thatempower players to thrive both mentally & 
        physically, on and off the field. ”</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      </div>
      <div className="w3-col l4 m4">
  
      <div style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'}}>
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
  );
}

export default ControlledCarousel;
