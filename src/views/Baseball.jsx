// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import CatchingBlog from '../components/Catching/CatchingBlog';
import Corey from '../assets/images/Baseball/Corey.png';
import Catch from '../assets/images/Baseball/Catch.png';

function CatchingBlogPage() {
  
  return (
    <div>
        <div className='row w3-row-padding'>
        <div className='w3-col l4 s12'>
        <div className='w3-margin w3-margin-top'>
              {/*card start for all popular posts elements*/}
              <div className="w3-container w3-black w3-padding-16">
                  {/*container start header popular posts */}
                  <h4>Popular Posts</h4>
                </div>
                {/*container end header popular posts */}
                <ul className="w3-ul w3-hoverable w3-white">
                  {/*list start popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-1 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-2 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-3 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br></br>
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-3 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-4 end popular posts */}
                </ul>
                {/*list end popular posts */}
                </div>
              {/*card end for all popular posts elements*/}
              <hr />
              <div className='w3-card w3-white w3-margin-top w3-margin'>
  <img src={Corey} alt='corey' style={{ width: '100%' }} className='w3-opacity w3-hover-opacity-off' />
  <div className='w3-container w3-padding-16'>
    <div className='card-header'>
      <h3><b>Corey Wargo</b></h3>
    </div>
    <div className='card-body'>
      <p className='w3-opacity'>Baseball Operations | Lead Catching Instructor</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint corporis commodi necessitatibus odio, laborum odit enim in cumque eum nisi eligendi ullam quis ipsum tenetur dolorem similique iure saepe.</p>
    </div>
    <div className='card-footer w3-margin-bottom w3-padding-8'>
      <Link to="/contact" className='text-decoration-none'>
        <button className='w3-button w3-black w3-block'>Contact</button>
      </Link>
    </div>
    </div>
  </div>
        </div>
        <div className='w3-col l8 s12'>
        <div className='w3-margin w3-margin-top'>
      <CatchingBlog />
      </div>
      </div>
      </div>
    </div>
  );
}

export default CatchingBlogPage;
