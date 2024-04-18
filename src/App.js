// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutSimple from "./components/LayoutSimple.jsx";
//import CatchingLayout from "./components/Catching/CatchingLayout.jsx";
//import SocialIcons from "./components/SocialIcons.jsx";
import CatchingPage from "./views/CatchingPage.jsx";
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import ContactPage from "./views/ContactPage.jsx";
import BaseballPage from "./views/BaseballPage.jsx";
import MotorPage from "./views/MotorPage.jsx";
import Footer from "./components/Footer.jsx";
//import MotorLayout from "./components/Motor/MotorLayout.jsx";
//import Scroll from "./views/Scroll.jsx";
import VideoHeader from "./components/VideoHeader/VideoHeader.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Define routes for HomePage and BaseballPage with VideoHeader */}
          <Route
            path="/"
            element={
              <>
                <VideoHeader />
                <HomePage />
              </>
            }
          />
          <Route
            path="/baseball"
            element={
              <>
                <VideoHeader />
                <BaseballPage />
              </>
            }
          />
            {/*
             <Route
            path="/catching"
            element={
              <>
                <VideoHeader />
                <CatchingPage />
              </>
            }
          />
           */}
          {/*
         <Route element={<MotorLayout />}>
         <Route path="/scroll" element={<Scroll />} />
          </Route>
                */}  

          <Route element={<LayoutSimple />} >
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/motor" element={<MotorPage />} />
          <Route path="/catching" element={<CatchingPage />} />
     
          </Route>
          {/* Add a catch-all route for handling errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
