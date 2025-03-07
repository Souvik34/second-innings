import React from 'react'
import img1 from "./images/domains/train1.gif";
import img2 from "./images/domains/train2.gif";
import img3 from "./images/domains/train3.gif";
// import Home4 from "./images/domains/groom2.png";
import "./styles/training.css"

import navpic from "./images/domains/demo.gif";
import { Carousel } from 'react-bootstrap';

function Training() {

  const images = [
    {
      id: 1,
      src: img1,
      alt: 'Image 1',
    },
    {
      id: 2,
      src: img2,
      alt: 'Image 2',
    },
    {
      id: 3,
      src: img3,
      alt: 'Image 3',
    },
   
    
  ];

  
  return (
    < >

    {/* HEADING TEXT */}

    <div className="head-txt">
          <h1 className="text-brown text-warning head mt-5 mb-4" >
              Tra<span className="text-warn" style={{color:"#ff8a8a"}}>i</span>n<span className="text-warn" style={{color:"#ff8a8a"}}>i</span>ng<span className="text-warn" style={{color:"#ff8a8a"}}> & </span>Gr<span className="text-warn" style={{color:"#ff8a8a"}}>oo</span>m
              <span className="text-warn" style={{color:"#ff8a8a"}}>i</span>ng
            </h1>
          </div>

{/* CAROUSEL */}
<div className="container">
<Carousel className=" shadow container mx-auto">
  {images.map(image => (
    <Carousel.Item key={image.id}>
      <img
        className="d-block rounded w-100"
        src={image.src}
        alt={image.alt}
      />
    </Carousel.Item>
  ))}
</Carousel></div>

      {/* PAST */}
      
            <h2 className="accordion-header" id="headingOne">
              
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse show mb-5 mt-5"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      style={{ width: "8rem" }}
                      src={navpic}
                      alt="Baga Beach"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 2 */}

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      alt="Madgaon"
                      style={{ width: "8rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 3 */}

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>

              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                          Petzee Traing Centre
                        <span  className="badge  " style={{color:"#F4D65E"}}> ₹750 onwards </span>
                      </h5>
                      <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                      <hr className="dropdown-divider" />
                      <h6>Ratings: ⭐⭐⭐⭐</h6>

                      <p>
                        <button
                          type="button"
                           className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

               
              </div>
            </div>
          


          {/* NEW */}
          

          <div  className="container mt-5 mb-3">
    <div  className="row">
        <div  className="col-md-4">
            <div  className="card p-3 mb-2">
                <div  className="d-flex justify-content-between">
                    <div  className="d-flex flex-row align-items-center">
                        <div  className="icon"> <i  className="bx bxl-mailchimp"></i> </div>
                        <div  className="ms-2 c-details">
                            <h6  className="mb-0">Mailchimp</h6> <span>2 days ago</span>
                        </div>
                    </div>
                    <div  className="badge"> <span>Design</span> </div>
                </div>
                <div  className="mt-5">
                    <h3  className="heading">Senior Product<br/>Designer-Singapore</h3>
                    <div  className="mt-5">
                        <div  className="progress">
                        <div  className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div  className="mt-3"> <span  className="text1">32 Applied <span  className="text2">of 50 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="col-md-4">
            <div  className="card p-3 mb-2">
                <div  className="d-flex justify-content-between">
                    <div  className="d-flex flex-row align-items-center">
                        <div  className="icon"> <i  className="bx bxl-dribbble"></i> </div>
                        <div  className="ms-2 c-details">
                            <h6  className="mb-0">Dribbble</h6> <span>4 days ago</span>
                        </div>
                    </div>
                    <div  className="badge"> <span>Product</span> </div>
                </div>
                <div  className="mt-5">
                    <h3  className="heading">Junior Product<br/>Designer-Singapore</h3>
                    <div  className="mt-5">
                        <div  className="progress">
                        <div  className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div  className="mt-3"> <span  className="text1">42 Applied <span  className="text2">of 70 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="col-md-4">
            <div  className="card p-3 mb-2">
                <div  className="d-flex justify-content-between">
                    <div  className="d-flex flex-row align-items-center">
                        <div  className="icon"> <i  className="bx bxl-reddit"></i> </div>
                        <div  className="ms-2 c-details">
                            <h6  className="mb-0">Reddit</h6> <span>2 days ago</span>
                        </div>
                    </div>
                    <div  className="badge"> <span>Design</span> </div>
                </div>
                <div  className="mt-5">
                    <h3  className="heading">Software Architect <br/>Java - USA</h3>
                    <div  className="mt-5">
                        <div  className="progress">
                            <div  className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div  className="mt-3"> <span  className="text1">52 Applied <span  className="text2">of 100 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


          
    </>
  )
}

export default Training
