import React, { useState, useEffect } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Error from "./components/Error";
// import About from "./components/About";
import Domains from "./components/Domains";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Gethome from "./components/Gethome";
import Gallery from "./components/Gallery";
import Adopt from "./components/Adopt";
import Volunteer from "./components/Volunteer";
// import Faq from "./components/Faq";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Lottie from "lottie-react";
import lottie from "./components/images/loading.json";
// import GetLocation from "./components/GetLocation";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// import AlanAI from "../src/components/AlanAI";
// import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Lottie
          className="lottie d-flex mx-auto"
          animationData={lottie}
          background="transparent"
        />
        
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home key="home" />}></Route>
            
            <Route
              exact
              path="faq"
              element={<Faq key="faq" />}
            ></Route>
            <Route
              exact
              path="gethome"
              element={<Gethome key="gethome" />}
            ></Route>
            <Route
              exact
              path="gallery"
              element={<Gallery key="gallery" />}
            ></Route>
            <Route
              exact
              path="adopt"
              element={<Adopt key="adopt" />}
            ></Route>
      
          
            <Route
              exact
              path="signin"
              element={<SignIn key="signin" />}
            ></Route>
            <Route
              exact
              path="signup"
              element={<SignUp key="signup" />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
            <Route
              exact
              path="contact"
              element={<Contact key="contact" />}
            ></Route>
            <Route
              exact
              path="volunteer"
              element={<Volunteer key="volunteer" />}
            ></Route>
          </Routes>
          <Chatbot />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
