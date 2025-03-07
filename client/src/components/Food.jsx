import React from 'react'
// import navpic from "./images/domains/Creche1.png";
import img1 from "./images/domains/food1.gif";
import img2 from "./images/domains/food2.gif";
import img3 from "./images/domains/food3.gif";
import img4 from "./images/domains/acc1.gif";
import img5 from "./images/domains/acc2.gif";
import { Carousel } from 'react-bootstrap';
function Food() {
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
    {
      id: 4,
      src: img4,
      alt: 'Image 4',
    },
    {
        id: 5,
        src: img5,
        alt: 'Image 5',
      },
   
    
  ];
  return (
    
    <>

<div className="head-txt">
          <h1 className="text-brown text-warning head mt-5 mb-4" >
              F<span className="text-warn" style={{color:"#ff8a8a"}}>oo</span>d<span className="text-warn" style={{color:"#ff8a8a"}}> & </span>A<span className="text-warn" style={{color:"#ff8a8a"}}>cc</span>e
              <span className="text-warn" style={{color:"#ff8a8a"}}>ss</span>orie
              <span className="text-warn" style={{color:"#ff8a8a"}}>s</span>
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
    
    

{/* <div class="container mt-5 mb-3">
    <div class="row">
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Mailchimp</h6> <span>1 days ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span>Design</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">Senior Product<br />Designer-Singapore</h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-dribbble"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Dribbble</h6> <span>4 days ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span>Product</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">Junior Product<br />Designer-Singapore</h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">42 Applied <span class="text2">of 70 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Reddit</h6> <span>2 days ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span>Design</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">Software Architect <br />Java - USA</h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
{/* </div> */}
    
</>
  )
}

export default Food
