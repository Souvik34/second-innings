import React from "react";
import { Link } from "react-router-dom";
import img1 from "./images/domains/feed1.gif";
import img2 from "./images/domains/feed2.gif";
import img3 from "./images/domains/feed3.gif";
import { Carousel } from 'react-bootstrap';
import graphic from "./images/anim3.gif";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/feed.css";

// import required modules



export default function feed() {
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
    <>
      {/* HEADING TEXT */}

    <div className="head-txt">
          <h1 className="text-brown text-warning head mt-5 mb-4" >
              F<span className="text-warn" style={{color:"#ff8a8a"}}>ee</span>d P<span className="text-warn" style={{color:"#ff8a8a"}}>os</span>t
              
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
      <div className="border mt-5">
       

      <div className="container row mx-auto d-flex text-bg-primary mb-3" >
        
      <div class="card shadow col-12 mx-auto d-flex container" style={{width: "18rem;", height:"650px"}}>
  <img src={graphic} class="card-img-top mx-auto d-flex" alt="..." style={{width: "50%", height:"50%", objectFit:"cover"}}/>
  <div class="card-body">
  
    <h5 class="card-title">Koushikee Bishnu</h5>
    <p class="card-text">My Queen</p>
  <ul class="list-group list-group-flush">
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-dark">👍</button>
  <button type="button" class="btn btn-outline-dark">❤️</button>
  <button type="button" class="btn btn-outline-dark">😘</button>
  <button type="button" class="btn btn-outline-dark">😂</button>
  <button type="button" class="btn btn-outline-dark">😢</button>
</div>
    <li class="list-group-item">Posted: 2nd March, 2023</li>
  </ul>
  </div>
  
</div>
</div>

<div className="container row mx-auto d-flex text-bg-primary mb-3" >
        
      <div class="card shadow col-12 mx-auto d-flex container" style={{width: "18rem;", height:"650px"}}>
  <img src={graphic} class="card-img-top mx-auto d-flex" alt="..." style={{width: "50%", height:"50%", objectFit:"cover"}}/>
  <div class="card-body">
  
    <h5 class="card-title">Koushikee Bishnu</h5>
    <p class="card-text">My Queen</p>
  <ul class="list-group list-group-flush">
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-dark">👍</button>
  <button type="button" class="btn btn-outline-dark">❤️</button>
  <button type="button" class="btn btn-outline-dark">😘</button>
  <button type="button" class="btn btn-outline-dark">😂</button>
  <button type="button" class="btn btn-outline-dark">😢</button>
</div>
    <li class="list-group-item">Posted: 2nd March, 2023</li>
  </ul>
  </div>
  
</div>
</div>

<div className="container row mx-auto d-flex text-bg-primary mb-3" >
        
      <div class="card shadow shadow col-12 mx-auto d-flex container" style={{width: "18rem;", height:"650px"}}>
  <img src={graphic} class="card-img-top mx-auto d-flex" alt="..." style={{width: "50%", height:"50%", objectFit:"cover"}}/>
  <div class="card-body ">
  
    <h5 class="card-title">Koushikee Bishnu</h5>
    <p class="card-text">My Queen</p>
  <ul class="list-group list-group-flush">
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-dark">👍</button>
  <button type="button" class="btn btn-outline-dark">❤️</button>
  <button type="button" class="btn btn-outline-dark">😘</button>
  <button type="button" class="btn btn-outline-dark">😂</button>
  <button type="button" class="btn btn-outline-dark">😢</button>
</div>
    <li class="list-group-item">Posted: 2nd March, 2023</li>
  </ul>
  </div>
  
</div>
</div>

<div className="container row mx-auto d-flex text-bg-primary mb-3" >
        
      <div class="card shadow col-12 mx-auto d-flex container" style={{width: "18rem;", height:"650px"}}>
  <img src={graphic} class="card-img-top mx-auto d-flex" alt="..." style={{width: "50%", height:"50%", objectFit:"cover"}}/>
  <div class="card-body">
  
    <h5 class="card-title">Koushikee Bishnu</h5>
    <p class="card-text">My Queen</p>
  <ul class="list-group list-group-flush">
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-dark">👍</button>
  <button type="button" class="btn btn-outline-dark">❤️</button>
  <button type="button" class="btn btn-outline-dark">😘</button>
  <button type="button" class="btn btn-outline-dark">😂</button>
  <button type="button" class="btn btn-outline-dark">😢</button>
</div>
    <li class="list-group-item">Posted: 2nd March, 2023</li>
  </ul>
  </div>
  
</div>
</div>

      </div>
    </>
  );
}