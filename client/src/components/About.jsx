import React from "react";
import graphic from "./images/about-anim.gif";
import { Link } from "react-router-dom";
import AIWriter from "react-aiwriter";
import "./styles/about.css";

export default function About() {
  return (
    <>
      <div className="mt-1">
        <div className="main">
          <div className="row d-flex mx-auto">
            <div className="anim about-anim col-sm-6 img-fluid mx-auto d-flex">
              <img
                className="graphic rounded img-fluid mr-5"
                src={graphic}
                alt=""
              />
              {/* <Lottie
              className="lottie d-flex mx-auto"
              animationData={lottie}
              background="transparent"
            /> */}
            </div>
            <div className="text col-sm-6 px-5">
            <div className="codebird mt-5">
              <h1 className="text-brown main-head" >
                <span className="text-warning" style={{color:"#ff8a8a"}}>
                Ab
                <span className="text-warn" style={{color:"#ff8a8a"}}>o</span>ut
                <span className="text-warn" style={{color:"#ff8a8a"}}> U</span>
                s
                </span>
                
              </h1>
            </div>
              <div className="sub-text my-5">
                <AIWriter delay={125}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                </AIWriter>
              </div>

              <button
                type="button"
                className="btn btn-info text-white btn-sm mb-5"
                style={{backgroundColor:"#ff8a8a"}}
              >
                <Link to="/contact" className="text-light">
                  Contact Us
                </Link>
              </button>

              {/* <a href="https://discord.gg/m6AMnhBXwn" target="blank">
                <button
                  type="button"
                  className="btn btn-warning text-dark btn-sm mb-5"
                >
                  <i className="fab fa-discord fa-flip text-light"></i> Join Our
                  Community
                </button>
              </a> */}
            </div>
          </div>
        </div>
        {/* First Member */}
        <div className="container">
          <div className="accordion-item mt-5">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                <span style={{color:"#ff8a8a"}}>
                  #<strong>&nbsp; Team Behind WOOF</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show mb-5 mt-5"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              
              <div className="row mt-2 mb-2">
                <div className="col-md-3 d-flex justify-content-around">
                  
                
                  
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem", backgroundColor:"#ffde59"}}
                  >
                   
                    <div className="flip-card"
                    style={{ width: "18rem", height: "6rem", backgroundColor:"#ffde59"}}>
                    
  <div class="flip-card-inner">
    <div class="flip-card-front">
    
                      <figure>
                        <blockquote className="blockquote">
                        <p>Aditya Gupta</p>
                          
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          Android Developer
                          <cite title="Source Title">(IT 2019-24)</cite>
                        </figcaption>
                      </figure>
                      </div>
                      <div class="flip-card-back">
                      <a href="https://www.linkedin.com/in/bikash-dutta27" target="_blank"rel="noreferrer">linkedin Profile</a>
    </div>
    </div>
    
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 2 */}

                <div className="col-md-3 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem", backgroundColor:"#ffde59"}}
                  >
                    <div class="dropdown">
  <li class="dropbtn"></li>
  <div class="dropdown-content">
    <ul>
    <li className="nav-item">
    <a href="https://www.linkedin.com/in/bikash-dutta27" target="_blank"rel="noreferrer">linkedin Profile</a>
              </li>
              </ul>
              </div>
              </div>
                    <div className="card-body">
                      <figure>
                        <blockquote className="blockquote">
                          <p>Bikash Dutta</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          Android Developer
                          <cite title="Source Title">(CSE 2022-25)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 3 */}

                <div className="col-md-3 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem", backgroundColor:"#ffde59"}}
                  >
                    <div class="dropdown">
  <li class="dropbtn"></li>
  <div class="dropdown-content">
    <ul>
    <li className="nav-item">
    <a href="https://www.linkedin.com/in/koushikee-bishnu-8a94aa216" target="_blank" rel="noreferrer">linkedin Profile</a>
              </li>
              </ul>
              </div>
              </div>
                    <div className="card-body">
                      <figure>
                        <blockquote className="blockquote">
                          <p>Koushikee Bishnu</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          Web Developer
                          <cite title="Source Title">(IT 2020-24)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 4 */}
                <div className="col-md-3 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem", backgroundColor:"#ffde59"}}
                  >
                    <div class="dropdown">
  <li class="dropbtn"></li>
  <div class="dropdown-content">
    <ul>
    <li className="nav-item">
    <a href="https://www.linkedin.com/in/sanjibkumardas-webdev" target="_blank" rel="noreferrer">linkedin Profile</a>
              </li>
              </ul>
              </div>
              </div>
                    <div className="card-body">
                      <figure>
                        <blockquote className="blockquote">
                          <p>Sanjib Kumar Das</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          Web Developer
                          <cite title="Source Title">(CSE 2020-24)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    
                  </div>
                </div>    
              </div>
                         
            </div>
          </div>

          {/* Current Member */}
         
        </div>
        {/* graph */}
      </div>
    </>
  );
}








