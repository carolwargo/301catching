import React from 'react';

const FAQ = () => {

    return (
        <div>
            <h1>FAQ</h1>
           
      <div className='mx-auto mb-4 flex-column justify-content-center justify-content-center'> {/* Added justify-content-center */}
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
      </div>
        </div>
    );
}

export default FAQ;