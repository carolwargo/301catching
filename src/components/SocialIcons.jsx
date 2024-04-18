import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { AnimatePresence, motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function BBSocialIcons() {
  return (
    <div className='bb-socials' id='bb-socials'>
              <AnimatePresence>
      <motion.div
        initial={{ opacity: -4,  }} // Start from above
        animate={{ opacity: 1, }} // Drop to the original position
        exit={{ opacity: 0,}} // Go back above before exit
        transition={{ duration: 2, ease: "easeInOut" }} // Ease in and out
      >
      <MDBContainer className='p-4 pb-0' style={{ position: 'fixed', top: '40%', right: -15, transform: 'translateY(80%)', zIndex: 1000 }}>
  <section className='mb-4 d-flex flex-column align-items-end'>
  <MDBBtn
      floating
      className='d-inline-flex align-items-center justify-content-center'
      style={{ 
        backgroundColor: '#00FF00', 
        marginBottom: '10px',
        boxShadow: '0 4px 10px rgba(85, 172, 238, 0.5), 0 6px 15px rgba(85, 172, 238, 0.5)',
        width: '35px',
        height: '35px'
      }}
      href="tel:+14437711708"
      role='button'
    >
      <MDBIcon icon='phone' className='text-white' />
    </MDBBtn>
    <MDBBtn
      floating
      className='d-inline-flex align-items-center justify-content-center'
      style={{ 
        backgroundColor: '#007BFF', 
        marginBottom: '10px',
        boxShadow: '0 4px 10px rgba(85, 172, 238, 0.5), 0 6px 15px rgba(85, 172, 238, 0.5)',
        width: '35px',
        height: '35px'
      }}
      href="mailto:301catching@gmail.com"
      role='button'
    >
  <MDBIcon fas icon='paper-plane' className='text-white' />
    </MDBBtn>
   

    <MDBBtn
      floating
     className='d-inline-flex align-items-center justify-content-center'
      style={{ 
        backgroundColor: 'black', 
        marginBottom: '10px',
        boxShadow: '0 4px 10px rgba(85, 172, 238, 0.5), 0 6px 15px rgba(85, 172, 238, 0.5)'
      }}
      href="https://twitter.com/301Catching"
      role='button'
    >
      <MDBIcon fab icon='twitter' />
    </MDBBtn>

    <MDBBtn
      floating
     className='d-inline-flex align-items-center justify-content-center'
      style={{ 
        backgroundColor: '#E4405F', 
        marginBottom: '10px',
        boxShadow: '0 4px 10px rgba(85, 172, 238, 0.5), 0 6px 15px rgba(85, 172, 238, 0.5)'
      }}
       href="https://www.instagram.com/301_catching/"
      role='button'
    >
      <MDBIcon fab icon='instagram' className='text-white' />
    </MDBBtn>


  </section>
</MDBContainer>
</motion.div>
</AnimatePresence>
      {/** 
      <div className="sticky-social-icons" style={{ marginRight: '10px' }}>
        <a href="tel:+4437711708" className="sticky-social-icon" >
          <i className="fas fa-phone-alt"></i>
        </a>
        <a href="mailto:301catching@gmail.com" className="sticky-social-icon" >
          <i className="fas fa-envelope"></i>
        </a>
     
        <a href="https://www.instagram.com/301_catching/"  className="sticky-social-icon" >
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/301_catching/" className="sticky-social-icon" >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      */}
    </div>
  );
}

export default BBSocialIcons;
