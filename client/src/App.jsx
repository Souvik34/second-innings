import React, { useEffect, useState } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Gethome from "./components/Gethome";
import Gallery from "./components/gallery";
import Adopt from "./components/Adopt";
import Volunteer from "./components/Volunteer";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import RuleandRegulation from "./components/ruleandregulation.jsx";
import Lottie from "lottie-react";
import lottie from "./components/images/loading.json";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from "./redux/action.js"
import toast from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { error, message, loading: userLoading } = useSelector(
    (state) => state.user
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(loadUser()).finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");
    const status = urlParams.get("status");
    if (message) {
      if (status === "success") {
        toast.success(message);
      } else {
        toast.error(message);
      }
      window.history.pushState({}, document.title, "/");
    }
  }, []);

  return (
    <>
      {loading || userLoading ? (
        <div className="loader-container">
          <Lottie
            className="lottie"
            animationData={lottie}
            background="transparent"
          />
        </div>
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
              path="adopt"
              element={<Adopt key="adopt" />}
            ></Route>
            <Route
              exact
              path="ruleandregulation"
              element={<RuleandRegulation key="ruleandregulation" />}
            ></Route>
            <Route exact path="gallery" element={<Gallery />} />
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
