import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Catch from '../assets/images/Baseball/Catch.png';
import MPTransparent from '../assets/images/Baseball/MPTransparent.png';
//import ScrollSpyComponent from '../components/Portfolio/SpyScroll/SpyScrollComponent.jsx';

const ScrollSpy = () => {

        return (
            <div className="scroll-spy bg-black" id='scroll-spy' >
<div className='w3-padding-top-64'>

               <div className="row">
               <div className="col-md-4" 
               style={{ 
                backgroundImage: 'url("path/to/your/image.jpg")', 
               backgroundSize: 'cover', 
               backgroundPosition: 'center', 
               position: 'relative' 
            }}
               >
            <div className='w3-center w3-content w3-padding-large '>
   <img src={MPTransparent} alt="MPTransparent" style={{width:"100%"}} />
  </div> 
  <hr />
  <nav 
  id="navbar-webdev" 
  className="h-100 flex-column align-items-stretch ">
   
    <div 
    data-bs-spy="scroll" 
    data-bs-target="#navbar-webdev" 
    data-bs-smooth-scroll="true" 
    className="scrollspy-webdev  border w3-padding-16" tabIndex="0">
      <nav className="nav flex-column">
        
        <a className="nav-link" href="#item-1"><b>DATABASE & AUTHORIZATION</b></a>
        <nav className="nav flex-column">
        <ul style={{fontSize:'1rem'}}>
          <a className="nav-link" href="#item-1-1"><b>I. DATABASE INTEGRATION</b></a>
          <ul style={{fontSize:'1rem'}}>
          <a className="nav-link " href="#item-1-1-1">- Benefits & Impact Chart</a>
          <a className="nav-link " href="#item-1-1-2">- Samples & Senarios</a>
          <a className="nav-link " href="#item-1-1-3">-"Project Overview: Build Process, Timeframe, and Cost"</a>
        </ul>
        
        </ul>
        </nav>


      </nav>
    </div>
    </nav>
  </div>

  <div className="col-sm-8 ">
    
  
    <div data-bs-spy="scroll" 
    data-bs-target="#navbar-webdev" 
    data-bs-smooth-scroll="true" 
    className="scrollspy-webdev p-3" 
    tabIndex="0" 
    style={{ height: '450px', overflowY: 'auto' }}>
    <div className='row'>
      <div className='col-md-4'>
      <img src={Catch} alt="catch" style={{width:"100%"}} />
      </div>
      <div className='col-md-8'>
      <h1 >SCROLL SPY EXAMPLE</h1>
  <p>Scroll spy example with content</p>
      </div>
    </div>
    
    
    {/*start db & AUTH */}
    <div id="item-1">
        <h3 style={{fontFamily:'belotta text'}}><b>DATABASE & AUTH SERVICES</b></h3>
        <p><u>THE BENEFITS & IMPACT OF DATABASE INTEGRATION & AUTHORIZATION SERVICES</u></p>
        <br></br>
        <p>"How To Turn A Visual Site Into One That Actually works on your behalf..."</p>
        <h5>DEFINING A WELL DEVELOPED WEBSITE</h5>
                  <p>In the business world, the heartbeat of success resonates with productivity, and at its very core lies the indispensable concept of <b>efficiency</b>.  
                    <br></br><b>Efficiency</b> -<i>"making the most of our time & resources"</i>{" "},
                    is crucial in any type of success, right? A website is no
                    different- An <i>efficient” site will allow you to “make the
                    most of your time & resources</i>”. A well developed website
                    will quite literally replace administrative need, eliminate
                    repetition, keep you organized, conduct analysis, and
                    generate “passive income”. 
                  </p>
                  <br></br>
        <p>Sound too good to be true?{" "}
                    <b>IT'S NOT</b>! <br></br></p>
                   
                    <div className='bg-secondary-subtle p-3 text-center'>
                    <p className='mb-1'>Continue reading to discover more, or reach out to us by visiting our <a href='/contact'>contact</a> page to connect with a skilled and knowledgeable designer who can offer a personalized experience tailored to your individual needs and preferences." </p>
                    </div>
                    <br></br>
                    <br></br>
                    <p>"Two Foundational Components Needed To Maximize Efficiency..."</p>
                    <h5>DATABASE & AUTH SERVICES WORKING TOGETHER</h5>
                    <p>Database and Authentication (auth) services work together, and are the most important components to incorporate when developing an efficient website or web application. Playing a foundational role in ensuring security, organization, and reliability of your site, and extention of your business. </p>       
</div>
<p>By implementing a Database & Authentication Services into your new or existing site, your website will achieve efficiency standards needed to allow you <i>" to make the most of your time & resources "</i>.</p>
                    
{/*end db & auth*/}
      <br></br>
      <br></br>
{/*start db */}
    <div id="item-1-1" className=' border-bottom' >
      <div >
    <div className='bg-dark p-2 text-white text-center'>
      <p className='m-1'>WHAT IS A DATABASE & HOW CAN IT WORK FOR ME?</p>
      <h4 className='m-1' style={{fontFamily:'belotta text'}}><b>DATABASE INTEGRATION</b></h4>
      </div>
        <p className='p-2'>A database is a structured and organized collection of data, usually stored and accessed electronically from a computer system. It is designed to efficiently manage, store, and retrieve information, making it easier to organize, update, and analyze large sets of data.</p>       
</div>
      <br></br>
<div>
      <div id="item-1-1-1">
      <p className='text-secondary'>"Benefits & Impact of having a database."</p>
      <h5><b>DATABASE BENEFITS & IMPACT CHART</b></h5>
      <p>Integrating a database into a business can offer a wide range of benefits, positively impacting various aspects of operations, decision-making, and overall efficiency. Here are several advantages of integrating a database into a business:</p>

      <div className="table-responsive ">
        <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th className='p-2' scope="col" style={{fontSize:'1rem'}}><b>CATEGORY</b></th>
      <th className='p-2' scope="col" style={{fontSize:'1rem'}}><b>BENEFITS</b></th>
      <th className='p-2' scope="col" style={{fontSize:'1rem'}}><b>IMPACT</b></th>
    </tr>
  </thead>
  <tbody style={{fontSize:'1rem'}}>
    <tr style={{fontSize:'1rem'}}>
      <th className='p-2'scope="row">Data Centralization</th>
      <td className='p-2'>A centralized database stores all relevant data in one place, making it easier to manage, update, and retrieve information.</td>
      <td className='p-2'>Streamlines data access and reduces the risk of data inconsistency or redundancy.</td>
    </tr>
    <tr>
      <th className='p-2'scope="row">Improved Data Accuracy</th>
      <td className='p-2'> Databases enforce data integrity constraints, reducing the chances of errors or inconsistencies in the stored data.</td>
      <td className='p-2'> Enhances the reliability of business-critical information and supports accurate decision-making.
</td>
    </tr>

    <tr>
      <th scope="row" className='p-2'>Efficient Data Retrieval</th>
      <td className='p-2'> Databases allow for efficient querying and retrieval of specific information using structured query languages (SQL).</td>
      <td className='p-2'> Enables quick access to relevant data, saving time and improving productivity.</td>
    </tr>
  
    <tr>
      <th className='p-2' scope="row">Enhanced Data Security</th>
      <td className='p-2'> Database management systems (DBMS) often include security features like access controls, encryption, and authentication.</td>
      <td className='p-2'> Helps protect sensitive business data, ensuring that only authorized personnel can access and modify information.</td>
    </tr>
    <tr>
      <th scope="row" className='p-2'>Streamlined Business Processes</th>
      <td className='p-2'> Integration with databases facilitates automation of repetitive tasks and workflows.</td>
      <td className='p-2'> Improves operational efficiency by reducing manual effort, minimizing errors, and accelerating business processes.
</td>
    </tr>
    <tr>
      <th className='p-2' scope="row">Better Decision-Making</th>
      <td className='p-2'> Integrated databases provide a comprehensive view of business data, supporting data-driven decision-making.</td>
      <td className='p-2'> Enables executives and managers to make informed decisions based on accurate and up-to-date information.</td>
    </tr>
    <tr>
      <th scope="row" className='p-2'>Scalability and Flexibility</th>
      <td className='p-2'> Databases can scale to accommodate growing amounts of data, and the structure can be adapted to changing business needs.</td>
      <td className='p-2'> Supports business growth and evolution by providing a flexible and scalable data infrastructure.</td>
    </tr>
    <tr>
      <th className='p-2' scope="row">Customer Relationship Management (CRM)</th>
      <td className='p-2'> Databases are integral to CRM systems, allowing businesses to track and manage customer interactions and relationships.</td>
      <td className='p-2'> Improves customer service, marketing effectiveness, and overall customer satisfaction.</td>
    </tr>
    <tr>
      <th className='p-2' scope="row">Regulatory Compliance</th>
      <td className='p-2'> Databases can assist in maintaining compliance with industry regulations and data protection laws.</td>
      <td className='p-2'> Reduces the risk of legal issues and penalties by ensuring data handling aligns with regulatory requirements.</td>
    </tr>
    <tr>
      <th scope="row" className='p-2'>Data Analytics and Reporting</th>
      <td className='p-2'> Integrated databases support data analytics and reporting tools, enabling businesses to derive insights from their data.</td>
      <td className='p-2'> Facilitates strategic planning, trend analysis, and performance monitoring.</td>
    </tr>
    <tr>
      <th className='p-2' scope="row">Inventory Management</th>
      <td className='p-2'> Databases are essential for tracking and managing inventory levels, orders, and supply chain activities.</td>
      <td className='p-2'> Optimizes inventory processes, reducing stockouts, overstocking, and associated costs.</td>
    </tr>
    <tr>
      <th className='p-2' scope="row">Collaboration and Communication</th>
      <td className='p-2'> Databases support collaboration by providing a shared platform for accessing and updating business-critical information.</td>
      <td className='p-2'> Enhances communication and collaboration among team members, departments, and stakeholders.</td>
    </tr>
  </tbody>
</table>
<br></br>
</div>
</div>
      </div>


      <div id='item-1-1-2'>
<p>"Examples & Scenarios"</p>
      </div>

      <div id='item-1-1-3'>
<p>"Project Overview: Build Process, Timeframe, and Cost"</p>
      </div>
      </div>
{/*end db */}
      </div>
      </div>    
  </div>
</div>

{/*end nav scroll*/}
            </div>
        )
    }

export default ScrollSpy;