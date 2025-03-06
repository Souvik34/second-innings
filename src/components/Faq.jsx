import React from 'react'

function Faq() {
  return (
    <>
    <div  className="accordion accordion-flush container mt-5" id="accordionFlushExample">
  <div  className="accordion-item">
    <h2  className="accordion-header" id="flush-headingOne">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How long does the adoption process take?
      </button>
    </h2>
    <div id="flush-collapseOne"  className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div  className="accordion-body">It varies. A rough average is two to three years.</div>
    </div>
  </div>
  <div  className="accordion-item">
    <h2  className="accordion-header" id="flush-headingTwo">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What is adoption?
      </button>
    </h2>
    <div id="flush-collapseTwo"  className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div  className="accordion-body">Adoption is the legal transfer of parental rights and responsibilities from birthparent(s) to adoptive parent(s).</div>
    </div>
  </div>
  <div  className="accordion-item">
    <h2  className="accordion-header" id="flush-headingThree">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Am I too old to adopt?
      </button>
    </h2>
    <div id="flush-collapseThree"  className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div  className="accordion-body">No! For local adoptions, the only age restriction is a minimum age (19). Older applicants may be encouraged to consider school-aged children or teens. Learn more about eligibility to adopt.</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Faq
