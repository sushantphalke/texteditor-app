import React from 'react'
import "./About.css"
export default function About(props) {

    return (
        <>
             <div id='about' className={`container my-5 container-${props.elementmode} bg-${props.elementmode}`}>
             <h2>About Me</h2>
             <div className={`accordion accordion-${props.elementmode} bg-${props.elementmode}`} id="accordionExample">
            <div className={`accordion-item accordion-item-${props.elementmode} bg-${props.elementmode}`}>
              <h2 className="accordion-header" id="headingOne">
                <button className={`accordion-button text-${props.elementmode==="light"?"dark":"light"}   accordion-button-${props.elementmode} bg-${props.elementmode}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className={`accordion-item accordion-item-${props.elementmode} bg-${props.elementmode}`}>
              <h2 className="accordion-header" id="headingTwo">
                <button className={`accordion-button collapsed text-${props.elementmode==="light"?"dark":"light"}   accordion-button-${props.elementmode} bg-${props.elementmode}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div> 
            </div>
            <div className={`accordion-item accordion-item-${props.elementmode} bg-${props.elementmode}`}>
              <h2 className="accordion-header" id="headingThree">
                <button className={`accordion-button collapsed text-${props.elementmode==="light"?"dark":"light"}   accordion-button-${props.elementmode} bg-${props.elementmode}` }type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          </div>


          </> 
    )
}
