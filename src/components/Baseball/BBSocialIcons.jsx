import React from 'react';

function BBSocialIcons() {
  return (
    <div className='bb-socials' id='bb-socials'>
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
        {/* Add more social media icons as needed */}
      </div>
    </div>
  );
}

export default BBSocialIcons;
