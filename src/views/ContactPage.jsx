import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Hit from '../assets/images/Baseball/Catch.png';
import Catch from '../assets/images/Baseball/Hit.png';


function ContactPage() {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_7wugrj8', 'template_0m8r0nf', form.current, {
      publicKey: '7JdmPQuTf_Xt-WdCk',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

    return (
      <div className='contact w3-light-gray' id='contact'>
        <div className="w3-container w3-padding-16" id="properties">
    <div className="w3-padding-top-64">
    <h3 className=" w3-border-light-grey text-center"><b>COREY</b>
    <span className='fw-light'> WARGO</span></h3>
  <p className="text-center w3-margin-bottom">...properties that transcend the ordinary, 
  offering exclusivity, seclusion, and a touch of magic.</p>
            <div className="row">
 
   
    <div className="w3-col l4 m6 flex-column w3-margin-bottom align-items-center">
      <div className="w3-display-container">
            <form ref={form} onSubmit={sendEmail}>
<div className='form-group'>
<label>Name</label>
<input 
type="text" 
name="user_name" 
placeholder='Name'
className="form-control" 
/>
</div>

<div className='form-group'>
<label>Email</label>
<input 
type="email" 
name="user_email" 
placeholder='email@mail.com'
className="form-control" 
/>
</div>

<div className='form-group'>
<label>Message</label>
<textarea 
name="message" 
className="form-control" 
placeholder='type message...'
/>
</div>
<div className='w3-margin-top'>
<input 
type="submit" 
value="Send"  
className='btn btn-white'
/>
</div>
</form>
      </div>
    </div>  
    </div>

    </div>  
    </div>



    <div id="beach"> 
        <div className="w3-row-padding">
    <div className="w3-display-container w3-padding">
    <h4><b>BEACH</b><span className="fw-light">|CHANTIES</span></h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit natus facere veritatis blanditiis saepe voluptate velit molestias quasi. Fugit quae delectus inventore eius aliquam natus voluptas minus nulla voluptatum?</p>
        </div>
        <div className="w3-display-container w3-padding">
    <div className="w3-col l4 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Row Home</div>
        <img src={Catch} alt="catch" style={{width:"100%"}}  className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>
    <div className="w3-col l4 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={Hit} alt="Hit" style={{width:"100%"}}  className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>

    <div className="w3-col l4 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
        <img src={Hit} alt="House" style={{width:"100%"}}  className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>
    </div>
    </div>
    </div>


        
        <div className='contact-form w3-container w3-content w3-padding-64 w3-margin-top' id='contact-form'>
      
        <div className='row d-flex w3-padding-top-48 justify-content-center align-items-center'>
       
        <div className='col-sm-12 col-md-4 col-lg-4 flex-column justify-content-center'>
        <div className="container">
        <h3 className="w3-border-light-grey">
                CONTACT<span className='fw-light'>US</span>
              </h3>
              <hr />
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 border border-4 w3-padding-24">
                <div className="w3-margin-left mb-1 " >
    <i className="fas fa-phone-alt me-2"></i>
    <span>Phone: <a href="tel:+14437711708">+1 (443) 771-1708</a></span>
</div>
<div className="w3-margin-left mb-1">
    <i className="fas fa-envelope me-2"></i>
    <span>Email: <a href="mailto:301catching@gmail.com">301catching@gmail.com</a></span>
</div>

               
                   <div className="w3-margin-left mb-1">
    <i className="fab fa-twitter me-2"></i>
    <span>Twitter: <a href="https://twitter.com/301Catching" target="_blank" rel="noopener noreferrer">@301Catching</a></span>
</div>
<div className="w3-margin-left mb-1">
    <i className="fab fa-instagram me-2"></i>
    <span>Instagram: <a href="https://www.instagram.com/301_catching/" target="_blank" rel="noopener noreferrer">@301_catching</a></span>
</div>

                </div>
            </div>
            </div>

        </div>
        
     <div className='row'>
        <div className='col-sm-12 col-md-12 col-md-12'>
        <div className='w3-card w3-black w3-padding-large'>
          <div className='w3-container w3-padding-large   w3-padding-24'>
          <form ref={form} onSubmit={sendEmail}>

            <div className='form-group'>
      <label>Name</label>
      <input 
      type="text" 
      name="user_name" 
      placeholder='Name'
      className="form-control" 
      />
</div>

<div className='form-group'>
      <label>Email</label>
      <input 
      type="email" 
      name="user_email" 
      placeholder='email@mail.com'
      className="form-control" 
      />
</div>

<div className='form-group'>
      <label>Message</label>
      <textarea 
      name="message" 
      className="form-control" 
      placeholder='type message...'
      />
</div>
<div className='w3-margin-top'>
      <input 
      type="submit" 
      value="Send"  
      className='btn btn-white'
      />
</div>

    </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default ContactPage;
