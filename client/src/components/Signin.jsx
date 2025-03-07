import { useRef } from "react";
import emailjs from "@emailjs/browser";
import graphic from "./images/contact-anim.gif";
import "./styles/signin.css";
import AIWriter from "react-aiwriter";

export default function Signin() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "signin_service",
        "template_4oa2a1b",
        refForm.current,
        "RJy48fHoAV--GvoIN"
      )

      .then(
        () => {
          alert("Message has been sent successfully!!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send your message! Please try again...");
        }
      );
  };
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
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      className="rounded-pill"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      className="rounded-pill"
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      className="rounded-pill"
                      type="text"
                      placeholder="Password"
                      name="Type Password"
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
                  <li> New to Second Innings?<a href="/signup" className="fa-fade"> SignUp Here.</a></li>
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