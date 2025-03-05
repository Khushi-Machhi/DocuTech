import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./sec.css";
import "./cssFiles/UserFeedback.css";
import l1 from "../assets/UserFeedback/1.png";
import l2 from "../assets/UserFeedback/2.png";
import l3 from "../assets/UserFeedback/3.png";
import l4 from "../assets/UserFeedback/4.png";
import l5 from "../assets/UserFeedback/5.png";
import l6 from "../assets/UserFeedback/6.png";
import user from "../assets/UserFeedback/user.jpg";

import left from "../assets/circle-left.svg";
import right from "../assets/circle-right.svg";

const reviews = [
  {
    id: 1,
    text: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    text: "A seamless experience for managing legal documents effortlessly.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    text: "An absolute game-changer for business contracts and agreements!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    text: "Super fast and efficient AI-powered document generation!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    text: "Highly recommended for anyone needing quick and reliable document automation!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    text: "Saved me hours of work with just a few clicks!",
    rating: "⭐⭐⭐⭐⭐",
  },
];

export default function UserFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 1024 ? 1 : 3);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < reviews.length ? prevIndex + 1 : 0
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <section id="feedback" className="s3 section">
      <h1 className="feedback-title">
        <span className="highlight">64.0k</span> businesses and individuals have
      </h1>
      <h1 className="feedback-title">
        signed with <span className="highlight">DocuTech</span>
      </h1>

    
      <div className="partners">
        <img src={l1} alt="UC San Diego" />
        <img src={l2} alt="VIRMA Global" />
        <img src={l3} alt="Howard University" />
        <img src={l4} alt="PharmBills" />
        <img src={l5} alt="Absa" />
        <img src={l6} alt="B2B Rocket" />
      </div>


      <h1 className="user-feedback-title">What our users say</h1>
      <div className="feedback-carousel">
        <button className="nav-button left" onClick={prevReview}>
          <img src={left} alt="left"/>
        </button>

        <div className="feedback-container">
          {reviews
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((review) => (
              <div key={review.id} className="feedback-card">
                <img src={user} alt="User" className="user-icon" />
                <p>{review.text}</p>
                <div className="stars">{review.rating}</div>
              </div>
            ))}
        </div>

        <button className="nav-button right" onClick={nextReview}>
          <img src={right} alt="right"/>
        </button>
      </div>
    </section>
  );
}
