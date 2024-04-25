import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    const templateParams = {
      email_address: email,
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_USER_ID"
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
      alert("Thank you for subscribing!");
    })
    .catch((error) => {
      console.error("Email failed to send!", error);
      alert("Oops! Something went wrong. Please try again.");
    });

    // Reset form
    setEmail("");
  };

  return (
    <MDBFooter style={{backgroundColor:'#0188CB'}} className="w3-padding-64 text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
          

            <MDBContainer className="w3-card w3-padding-large w3-padding-24">
            <h3>
              <strong>SIGN UP!</strong>
            </h3>
            <form onSubmit={handleSubmit}>
              <MDBRow className="d-flex justify-content-center">
                <MDBCol md="8" size="12" >
                  <MDBInput
                    type="email"
                    id="form5Example2"
                    label="Email address"
                    contrast
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </MDBCol>
                <MDBCol md="4" size="12" >
                  <MDBBtn outline color="light" type="submit">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, in? Vitae quo minima, consectetur id delectus velit
                inventore? Dolorum, et! Consectetur quam perferendis illo quod.
                Reprehenderit culpa quod omnis incidunt?
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-start"></MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
