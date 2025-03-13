import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/testimonial.css";
import pic from "./images/avatar.png";
import { useTheme } from "../context/ThemeContext";

export default function Testimonial() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora distinctio quod atque, modi delectus iure dignissimos!",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Aspernatur cumque sapiente vero tempore nostrum nemo repellat veniam porro! Veritatis, aperiam! Iure, id?",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Tempora distinctio quod atque, modi delectus iure dignissimos! Aspernatur cumque sapiente vero tempore nostrum nemo repellat.",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora distinctio quod atque, modi delectus iure dignissimos!",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Aspernatur cumque sapiente vero tempore nostrum nemo repellat veniam porro! Veritatis, aperiam! Iure, id?",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Tempora distinctio quod atque, modi delectus iure dignissimos! Aspernatur cumque sapiente vero tempore nostrum nemo repellat.",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora distinctio quod atque, modi delectus iure dignissimos!",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Aspernatur cumque sapiente vero tempore nostrum nemo repellat veniam porro! Veritatis, aperiam! Iure, id?",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
    {
      text: "Tempora distinctio quod atque, modi delectus iure dignissimos! Aspernatur cumque sapiente vero tempore nostrum nemo repellat.",
      name: "Demo User",
      location: "Kolkata, West Bengal",
      img: pic,
    },
  ];

  const { theme } = useTheme();

  return (
    <div className="container test">
      <h2 className="heading my-4">
        <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
            <span className="text-warnin" style={{ color: "#15A6BA", fontWeight: "500" }}>
              T<span className="text-warn" style={{ color: "#EEE" }}>ES</span>T
              <span className="text-warnin" style={{ color: "#15A6BA" }}>
                <span className="text-warn" style={{ color: "#EEE" }}>I</span>MO
              </span>
              <span className="text-warn" style={{ color: "#EEE" }}>NI</span>AL
            </span>
          </h1>
        </div>
      </h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={`swiper-client bg-${theme} ${theme === "dark" ? "text-white" : "text-dark"}`}>
              <div className="mycard shadow rounded">
                <p className="review-text">
                  <i className="fa-solid fa-quote-left quote" style={{ color: "#ff8a8a" }}></i>
                  {testimonial.text}
                </p>
                <div className="review-details row mt-4">
                  <div className="col-md-6 image d-flex mx-auto px-4">
                    <figure>
                      <img className="user" src={testimonial.img} alt={testimonial.name} />
                    </figure>
                    <div className="mt-3 mx-3 data mb-5">
                      <p className="name fw-bold">{testimonial.name}</p>
                      <p className="post">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
