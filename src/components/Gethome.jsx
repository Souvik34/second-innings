import React from 'react'
import "./styles/gethome.css"
import pic1 from "./images/Home1.png"
import pic2 from "./images/Home2.png"
import pic3 from "./images/Home3.png"
function Gethome() {
  return (
    <div>
        <h2 className="heading my-4">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  F
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    I
                  </span>                 
                  ND
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    {" "}A{" "}
                  </span> 
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  {" "}H
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    O
                  </span>                 
                  M
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>  
                </span>
                </span>
              </h1>
          </div>
        </h2>
      <div  className="get-home-container">
        <div  className="get-home-card" style={{color:"#009688"}}>
            <div  className="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div  className="content">
                <h2>Snehodiya</h2>
                <p>Address: Street Number 165, Action Area 1B, Newtown, Kolkata, West Bengal 700156</p>
                <div  className="rating">
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-regular fa-star"></i>
                    <span>4/5</span>
                    
                </div>
    
                <a href="*">Read More</a>
            </div>
        </div>
        <div  className="get-home-card" style={{color:"#ff3e7f"}}>
            <div  className="imgBx">
                <img src={pic2} alt=""/>
            </div>
            <div  className="content">
                <h2>Natun Ghar</h2> 
                               
<p>Address: AD-369, Rabindrapally, Kestopur, Kolkata, West Bengal 700101</p>
                <div  className="rating">
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-regular fa-star"></i>
                    <span>5/5</span>
                    
                </div>
    
                <a href="*">Read More</a>
            </div>
        </div>
        <div  className="get-home-card" style={{color:"#03a9f4"}}>
            <div  className="imgBx">
                <img src={pic3} alt=""/>
            </div>
            <div  className="content">
                <h2>The Golden Mile</h2>
                <p>Address: JG68+39V, Chandpur, Near Lauhati Behind Vedic Village, Newtown, Lauhati, West Bengal 700135</p>
                
                <div  className="rating">
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-solid fa-star"></i>
                    <i  className="fa-regular fa-star"></i>
                    <span>4/5</span>
                    
                </div>
    
                <a href="*">Read More</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Gethome
