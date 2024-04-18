import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Hit from '../assets/images/Baseball/Hit.png';
import Catch from '../assets/images/Baseball/Catch.png';

export default function App() {
  return (
    <div className='footer'>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
  <MDBContainer className=' text-md-start mt-5'>
    <MDBRow className='mt-3 d-flex'> 
      <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4 flex-column justify-content-center'> 
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="gem" className="me-3" />
          <b>301</b> 
          <span 
          style={{fontWeight:'lighter'}}>
            |CATCHING
            </span>
        </h6>
        <div className='w3-light-gray w3-padding-large text-muted'
   
        >
        <p>
          <span 
          style={{ 
            fontWeight:'bolder', 
            fontSize:'12px', 
            marginTop:'-10px',
            marginBottom:'-10px'
            }}
            >
              'THE FOUNDATIONAL EXPERTS FOR EVERYTHING CATCHING!'
              </span>
              </p>
        <p 
        style={{
          fontSize:'12px',
          marginTop:'-10px',

          }}
          > 
Providing Players with the skills to master their craft & elevate 
their game.
        </p>
     
        </div>
       
      
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 flex-column justify-content-center justify-content-center'>
      <h6 className='text-uppercase fw-bold mb-3 w3-margin-left'>Contact</h6>
      <p style={{fontSize:'14px', marginTop:'-10px'}} className='w3-margin-left'>
       
        <a href='https://web3.ncaa.org/ecwr3/' 
        className='text-reset'>Eligibility Center</a>
        </p>
        </MDBCol>

      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 flex-column justify-content-center justify-content-center'>
        <p style={{fontSize:'14px'}}>
          <Link to='/catching'  className='w3-margin-left text-reset'>
          <img src={Catch} alt='catch' style={{width:'100%'}}/> 
          </Link>
        </p>
        </MDBCol>
        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 flex-column justify-content-center justify-content-center'>  
       
        <p style={{fontSize:'14px'}}>
          <Link to='/motor' className='w3-margin-left text-reset'>
         <img src={Hit} alt='hit' style={{width:'100%'}}/>
          </Link>
        </p>
      </MDBCol>
{/*
      <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 flex-column justify-content-center justify-content-center'>  
        <h6 className='text-uppercase fw-bold mb-4'><i className='fas fa-map-marker-alt' style={{ marginRight: '5px' }}></i>Locations</h6>
        <p style={{fontSize:'14px'}} className='w3-margin-left'>
          <a href='https://www.google.com/maps?q=8288+Telegraph+Rd,+Odenton,+MD+21113'>
            Odenton, Md. 21113
          </a>
        </p>
        <p style={{fontSize:'14px'}} className='w3-margin-left'>
          <a href='https://www.google.com/maps?q=250+W.+Bayfront+Rd.,+Lothian,+Maryland+20711'>
            Lothian, Md. 20711
          </a>
        </p>
        <p style={{fontSize:'14px'}} className='w3-margin-left'>
          <a href='https://www.google.com/maps?q=3331+Horn+Rd.,+Huntingtown,+MD+20639'>
            Huntingtown, Md. 20639
          </a>
        </p>
      </MDBCol>
*/}


      <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-3 flex-column justify-content-center justify-content-center' > 
<p className='w3-margin-left' style={{fontSize:'14px'}}><b>CONTACT US:</b></p>

<p style={{fontSize:'14px', marginTop:'-10px'}} className='w3-margin-left'>
<a href="tel:+14437711708"   className='text-reset'>
<MDBIcon icon="phone" className="me-2" />
</a>443-771-1708</p>
<p style={{fontSize:'14px', marginTop:'-10px'}} className='w3-margin-left'>

<a href="mailto:301catching@gmail.com"
className='text-reset'>
  <MDBIcon icon="envelope" className="me-2" /> 
  301CATCHING@GMAIL.COM
</a>
</p>
<hr />
        <p className='w3-margin-left' style={{fontSize:'14px'}}><b>FOLLOW US:</b></p>

        <p style={{fontSize:'14px', marginTop:'-10px'}} className='w3-margin-left'>
        <MDBIcon fab icon="twitter" className="me-3" />
          <a href="https://twitter.com/301Catching"  className='text-reset'>Twitter</a>
        </p>
        <p style={{fontSize:'14px', marginTop:'-10px'}} className='w3-margin-left'>
        <MDBIcon fab icon="instagram" className="me-3" /> 
        <a href="https://www.instagram.com/301_catching/"  
        className='text-reset'>Instagram</a>
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>


      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
     Powered by:
        <a className='text-reset' href='https://mdbootstrap.com/'> 301CATCHING.COM  
        </a>
       
      </div>
    </MDBFooter>
    </div>
  );
}