import React, { useState, useEffect } from "react";
import "./sec.css";
import Ccheck from "../assets/Ccheck.svg";
import "./cssFiles/Features.css";

const Features = () => {
  const words = ["Create", "Sign", "Convert"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="s1 section">
      <div className="title-container">
        <div className="t">
          <p className="title">AI-Powered Unified Platform;</p>
          <p className="d title">
            <span className="gradient-text">{words[index]}</span> Effortlessly
          </p>
          <p className="desc">
            Fast, Smart & Secure - Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
          </p>
        </div>

        <div className="title-sub-container">
          <p><img className="img" src={Ccheck} alt="check icon" /> ESIGN Compliant</p>
          <p><img className="img" src={Ccheck} alt="check icon" /> UETA Approved</p>
          <p><img className="img" src={Ccheck} alt="check icon" /> eIDAS Certified</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
