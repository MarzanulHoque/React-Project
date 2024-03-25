import React from "react";
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-grey">
      <div className="wrapper">
        <h2>What our students say ?</h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} alt="" />
            <div className="reviewer-details">
              <div className="name">Peter Adam</div>
              <div className="company-name">Google</div>
              <div className="review">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial2} alt="" />
            <div className="reviewer-details">
              <div className="name">John doe</div>
              <div className="company-name">Instagram</div>
              <div className="review">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial3} alt="" />
            <div className="reviewer-details">
              <div className="name">Laura Adam</div>
              <div className="company-name">Twitter</div>
              <div className="review">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
