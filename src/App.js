// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutSimple from "./components/LayoutSimple.jsx";
import CatchingLayout from "./components/Catching/CatchingLayout.jsx";
import CatchingPage from "./views/CatchingPage.jsx";
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import ContactPage from "./views/ContactPage.jsx";
import BaseballPage from "./views/BaseballPage.jsx";
import MotorPage from "./views/MotorPage.jsx";
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
          {/* Start CatchingLayout with CatchingHeader and CatchingFooter */}
         <Route element={<CatchingLayout />}>
            <Route path="/catching" element={<CatchingPage />} />
          </Route>
                    {/* End CatchingLayout */}
          <Route path="/layout-simple" element={<LayoutSimple />} />
        <Route path="/motor" element={ <MotorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add a catch-all route for handling errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
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
