import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles/testimonial.css";

import pic from "./images/avatar.png";

// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
  return (
    <>
      <div className="container test">
        <h2 className="heading my-4">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"500" }}>
                  T
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    ES
                  </span>                 
                  T
                
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    I
                  </span>                 
                  MO
                </span>
                <span className="text-warn" style={{ color: "#EEE" }}>
                    NI
                  </span>
                  AL
                  </span>
              </h1>
          </div>
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper container"
        >
          <SwiperSlide>
            <div className="swiper-client">
              <div className="mycard shadow rounded">
                <p className="review-text">
                  <i className="fa-solid fa-quote-left text-warn quote " style={{color:"#ff8a8a"}}></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              
              <div className="review-details row mt-4" >
                <div className="col-md-5 image  d-flex mx-auto px-4">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Demo User</p>
                    <p className="post">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client">
              <div className="mycard shadow rounded mymycard">
                <p className="review-text">
                <i className="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              
              <div className="review-details row mt-4">
                <div className="col-md-6 image  d-flex mx-auto px-4">
                  <figure>
                    <img className="user1" src={pic} alt="" />
                  </figure>
                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Demo User</p>
                    <p className="post">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div className="mycard shadow rounded">
                <p className="review-text">
                <i className="fa-solid fa-quote-left text-warn quote " style={{color:"#ff8a8a"}}></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
                
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto px-4">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Demo User</p>
                    <p className="post">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div className="mycard shadow rounded">
                <p className="review-text">
                  <i className="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
                
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto px-4">
                  <figure>
                    <img className="user1" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Demo User</p>
                    <p className="post">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div className="mycard shadow rounded">
                <p className="review-text">
                <i className="fa-solid fa-quote-left text-warn quote " style={{color:"#ff8a8a"}}></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto px-4">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Demo User</p>
                    <p className="post">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div className="mycard shadow rounded">
                <p className="review-text">
                  <i className="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto px-4">
                  <figure>
                    <img className="user1" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Demo User</p>
                    <p className="post">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div className="mycard shadow rounded">
                <p className="review-text">
                <i className="fa-solid fa-quote-left text-warn quote " style={{color:"#ff8a8a"}}></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto px-4">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Demo User</p>
                    <p className="post">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
