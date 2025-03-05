import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import Notebar from "../notebar/Notebar";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import di from "../../assets/di.svg";

const Navbar = () => {
  return (
    <>
    <div className={styles.div}>
      <Notebar/>
    <nav className={styles.navbar}>

      <div className={styles.leftdiv}><Logo /></div>

      <div className={styles.centerdiv}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="features" smooth={true} duration={200}>Features</Link>
        </li>
        <li>
          <Link to="whyus" smooth={true} duration={200}>Why Choose Us</Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} duration={200}>Pricing</Link>
        </li>
        <li>
          <Link to="faqs" smooth={true} duration={200}>FAQ</Link>
        </li>
      </ul>
      </div>

      <div className={styles.rightdiv}>
        <img className={styles.img} src={di} alt="" />
        <Button name="Get started"/>
      </div>

    </nav>
    </div>
    </>
  );
};

export default Navbar;
