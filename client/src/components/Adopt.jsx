import React, {useEffect} from 'react'

import "./styles/adopt.css";

function Adopt() {
  return (
   <>
   <div className="container">
    
   
   </div>
   <form className='container mt-5'>
    
   <h2 className="heading my-2">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  AD
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    OP
                  </span>                 
                  T
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    {" "}P
                  </span> 
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  AR
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>                 
                  NT
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    S
                  </span>  
                </span>
                </span>
              </h1>
          </div>
        </h2>

<div className="row mb-5 text-light fs-4">Do you think your residence could benefit from staying connected through our "Adopt Parent" program? If so, then register your care home today. <br /> Fill out the following form, and a member of your family will be in touch should be in touch for the complete process.</div>

  <div  className="row mb-4">
    <div  className="col">
      <div  className="form-inline">
        <input type="text" id="form6Example1"  className="form-control" placeholder='First Name' />
        <label  className="form-label" for="form6Example1"></label>
      </div>
    </div>
    <div  className="col">
      <div  className="form-outline">
        <input type="text" id="form6Example2"  className="form-control" placeholder='Last Name' />
        <label  className="form-label" for="form6Example2"></label>
      </div>
    </div>
  </div>
  <div  className="form-outline mb-4">
    <input type="text" id="form6Example3"  className="form-control" placeholder='Address line 1' />
    <label  className="form-label" for="form6Example3"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="text" id="form6Example4"  className="form-control" placeholder='Address line 2' />
    <label  className="form-label" for="form6Example4"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="text" id="form6Example4"  className="form-control" placeholder='City/Town' />
    <label  className="form-label" for="form6Example4"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="Number" id="form6Example4"  className="form-control" placeholder='Postcode' />
    <label  className="form-label" for="form6Example4"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="email" id="form6Example5"  className="form-control" placeholder='Email' />
    <label  className="form-label" for="form6Example5"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="number" id="form6Example6"  className="form-control" placeholder='Phone' />
    <label  className="form-label" for="form6Example6"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="number" id="form6Example6"  className="form-control" placeholder='Annual Income' />
    <label  className="form-label" for="form6Example6"></label>
  </div>
  <div  className="form-outline mb-4">
    <textarea  className="form-control" id="form6Example7" rows="4" placeholder='Additional Information' ></textarea>
    <label  className="form-label" for="form6Example7"></label>
  </div>

  <a type="submit" href="mailto: secondinnings23@gmail.com" className="btn btn-primary btn-block mb-4">Submit</a>

  
</form>
<a className='text-danger fs-2 mx-5' href='https://drive.google.com/file/d/1ejjqhgwyAp07gjrBXGrvLzekPc25DCAj/view?usp=sharing'>*** Rules & Regulations!!! ***</a>
   </>
  )
}

export default Adopt