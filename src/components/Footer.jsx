import React from 'react';
import Certified from '../assets/images/Baseball/Certified.png';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function Footer() {
  
  return (
    <div className='footer'>
    <MDBFooter  className='text-center w3-light-grey text-lg-start text-muted'>

      <section className='w3-padding-24'>
  <MDBContainer className=' text-md-start mt-4'>
    <MDBRow className='d-flex'> 
      <MDBCol md="5" lg="5" xl="5" className='mx-auto w3-padding-small flex-column justify-content-center'> 
        <h6 className='text-uppercase fw-bold mb-4'>
    
          <b>301</b> 
          <span 
          style={{fontWeight:'lighter'}}>
            |CATCHING
            </span>
        </h6>
        <div className='w3-light-gray text-muted'
   
        >
        <p>
          <span 
          style={{ 
            fontWeight:'bolder', 
            }}
            >
              'THE FOUNDATIONAL EXPERTS FOR EVERYTHING CATCHING!'
              </span>
              </p>
        <p 
        style={{
          marginTop:'-10px',

          }}
          > 
Providing Players with the skills to master their craft & elevate 
their game.
        </p>
        <button className="w3-button w3-black w3-section me-2" type="submit">CATCH</button>
        <button className="w3-button w3-black w3-section" type="submit">CATCH</button>
       
        </div>
       
      
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 flex-column justify-content-center align-items-center'>
      <h6 className='text-uppercase fw-bold mb-3'>Menu</h6>
      <Link to='/' className='text-reset'><p > 
        301 Home
        </p>
        </Link>
        <Link to='/about' className='text-reset'>
        <p style={{ marginTop:'-10px'}} > 301 About
        </p>
        </Link>
        <Link to='/catching' className='text-reset'>
        <p style={{ marginTop:'-10px'}} > 301 Catching
        </p>
        </Link>
        <Link to='/motor' className='text-reset'>
        <p style={{ marginTop:'-10px'}} > 301 Motor Preferences
        </p>
        </Link>
     
        </MDBCol>



      
      
  <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-3 flex-column justify-content-center align-items-center' > 
<p><b>CONTACT US:</b></p>

<p style={{ marginTop:'-10px'}}>
<a href="tel:+14437711708"   className='text-reset'>
<MDBIcon icon="phone" className="me-2" />
</a>443-771-1708</p>

<p style={{ marginTop:'-10px'}}>
<a href="mailto:301catching@gmail.com"
className='text-reset'>
  <MDBIcon icon="envelope" className="me-2" /> 
  301CATCHING@GMAIL.COM
</a>
</p>

        <p style={{ marginTop:'-10px'}}>
        <MDBIcon fab icon="twitter" className="" />
          <a href="https://twitter.com/301Catching"  className='text-reset'> Twitter</a>
        </p>
        <p style={{ marginTop:'-10px'}}>
        <MDBIcon fab icon="instagram"/> 
        <a href="https://www.instagram.com/301_catching/"  
        className='text-reset'> Instagram</a>
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
<footer className="w3-center w3-padding-16">
        <img src={Certified} alt="logo" style={{ width: "100px" }} />
        <p>
          Powered by{" "}
          <Link to="/" title="301link" className="w3-hover-text-green">
            <b>301</b>CATCHING.COM
          </Link>
        </p>
      </footer>

  
    </MDBFooter>
    </div>
  );
}