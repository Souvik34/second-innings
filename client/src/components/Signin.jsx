import { useEffect, useRef, useState } from "react";
import graphic from "./images/contact-anim.gif";
import "./styles/signin.css";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action.js"
import toast from "react-hot-toast"

export default function Signin() {
  const refForm = useRef();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if(!email || !password) return toast.error("Please fill all the fields");
    if(password.length < 6) return toast.error("Password should be atleast 6 characters long");
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(!emailRegex.test(email)) return toast.error("Invalid Email");
    dispatch(login(email,password))
  }

  useEffect(()=> {
    if(isAuthenticated) {
      navigate("/"); 
    }
  },[isAuthenticated,navigate])

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "signin_service",
  //       "template_4oa2a1b",
  //       refForm.current,
  //       "RJy48fHoAV--GvoIN"
  //     )

  //     .then(
  //       () => {
  //         alert("Message has been sent successfully!!");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Failed to send your message! Please try again...");
  //       }
  //     );
  // };
  return (
    <>
      <div className="main mt-5">
        <div className="row d-flex mx-auto">
          <div className="text col-sm-6 px-5">
            <div className="codebird">
            <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  S
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    I
                  </span>                 
                  GN
                  </span>

                  <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    
                    {" "}I
                  </span>                 
                  N
                  </span>
                  </h1>  
            </div>
            <div className="sub-text my-5 fs-5 text-light">
              
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
         
            </div>
            <div className="signin-form mt-5">
              <form ref={refForm} onSubmit={handleLogin}>
                <ul>
                  <li className="">
                    <input
                      className={`rounded-pill bg-${theme} ${theme === "dark" ? "text-light" : "text-dark"}`}
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id=""
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      className={`rounded-pill bg-${theme} ${theme === "dark" ? "text-light" : "text-dark"}`}
                      type="text"
                      placeholder="Password"
                      name="Type Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </li>
                  {/* <li>
                    <textarea
                      className="rounded"
                      placeholder="Messsage"
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                  </li> */}
                  <div className="row mt-5 text-white fs-4">
                  <li> New to Second Innings?<Link to="/signup" className="fa-fade"> SignUp Here.</Link></li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button button btn-info rounded-pill fs-4"
                      value="Submit"
                    />
                  </li>
                  </div>
                </ul>
              </form>
            </div>
          </div>

          <div className="anim col-sm-6 img-fluid mx-auto d-flex">
            <img
              className="home-anim rounded img-fluid mx-auto d-flex"
              src={graphic}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}