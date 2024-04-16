import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className='footer'>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

        <div>
      
          
        
                <a href="https://twitter.com/301Catching" 
                target="_blank" rel="noopener noreferrer">  <MDBIcon fab icon="twitter" className="me-3" /></a>


                <a href="mailto:301catching@gmail.com" target="_blank" rel="noopener noreferrer">                
                <MDBIcon icon="envelope" className="me-3" /></a>
          
              
               
                <a href="tel:+14437711708" target="_blank" 
                rel="noopener noreferrer"> 
                <MDBIcon icon="phone"className="me-3" /> </a>
          
              
               
                <a href="https://www.instagram.com/301_catching/" 
                target="_blank" rel="noopener noreferrer"> <MDBIcon fab icon="instagram" className="me-3" /> </a>
            
       
        </div>
      </section>
      <section className=''>
  <MDBContainer className=' text-md-start mt-5'>
    <MDBRow className='mt-3 d-flex align-items-center'> {/* Added align-items-center */}
      <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 flex-column justify-content-center justify-content-center'> {/* Added justify-content-center */}
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="gem" className="me-3" />
          <b>301</b>CATCHING
        </h6>
        <p style={{fontSize:'14px'}}>
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
      </MDBCol>

      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 flex-column justify-content-center justify-content-center'> {/* Added justify-content-center */}
        <h6 className='text-uppercase fw-bold mb-4'> <i className='fas fa-tools' style={{ marginRight: '5px' }}></i>
        Services</h6>
        <p style={{fontSize:'14px'}} className='w3-margin-left'>
          <Link to='/catching'>
            Catching
          </Link>
        </p>
        <p style={{fontSize:'14px'}} className='w3-margin-left'>
          <Link to='/motor'>
            Hitting
          </Link>
        </p>
      </MDBCol>

      <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 flex-column justify-content-center justify-content-center'> {/* Added justify-content-center */}
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

      <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 flex-column justify-content-center justify-content-center' > {/* Added justify-content-center */}
        <h6 className='text-uppercase fw-bold mb-4'  style={{ marginLeft: '5px' }}><i className='fas fa-address-card' style={{ marginRight: '5px' }}></i>Contact</h6>
        <p style={{fontSize:'14px'}} className='w3-margin-left'>
          <MDBIcon icon="envelope" className="me-3" />
          <a href="mailto:301catching@gmail.com">301catching@gmail.com</a>
        </p>
        <p style={{fontSize:'14px'}} className='w3-margin-left'>
          <MDBIcon icon="phone" className="me-3" /> <a href="tel:+14437711708">+1 (443) 771-1708</a>
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>


      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}