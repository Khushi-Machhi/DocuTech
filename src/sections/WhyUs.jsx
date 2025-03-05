import React from "react";
import './sec.css';
import "./cssFiles/WhyUs.css";

const WhyUs = () => {

  const listItems = [
    {
      idx: 1,
      ans: "Trusted by Thousands"  
    },
    {
      idx: 2,
      ans: "SOC-2 Certified"  
    },
    {
      idx: 3,
      ans: "GDPR & HIPAA Compliant"  
    },
    {
      idx: 4,
      ans: "End-to-end encryption"  
    },
  ]
  return (
    <section id="whyus" className="s4 section">
      <h1>Why Choose DocuTech</h1>
      <div className="maindiv">
        <div className="leftdiv">
          {
            listItems.map((li)=>(
              <div className="answer">
                  <h5>{li.ans}</h5>
              </div>
            ))
          }
        </div>
        <div className="rightdiv">

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
