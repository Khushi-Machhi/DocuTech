import React from "react";
import Navbar from "../components/navbar/Navbar";
import Features from "../sections/Features";
import WhyUs from "../sections/WhyUs";
import Pricing from "../sections/Pricing";
import Faqs from "../sections/Faqs";
import UserFeedback from "../sections/UserFeedback";
import DropFile from "../sections/DropFile";
import styles from "./Home.module.css";
import FLinks from "../components/footerLinks/FLinks";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.screen}>
        <Features />
        <DropFile />
        <UserFeedback />
        <WhyUs />
        <Pricing />
        <Faqs />
      </div>
      <FLinks />
    </>
  );
};

export default Home;
