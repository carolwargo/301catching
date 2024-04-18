import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GuyPic2 from 'assets/images/Baseball/GuyPic2.png';
import JoePic2 from 'assets/images/Baseball/JoePic2.png';
import JohnPic2 from 'assets/images/Baseball/JohnPic2.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
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
  );
}

export default ControlledCarousel;
