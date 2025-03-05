import styles from "./FLinks.module.css";
import Logo from "../logo/Logo";

import whatsapp from "../../assets/footer/whatsapp.svg";
import facebook from "../../assets/footer/facebook.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import discord from "../../assets/footer/discord.svg";
import mail from "../../assets/footer/mail.svg";
import message from "../../assets/footer/message.svg";


export default function Footer(){
    return(
        <div className={styles.footercontainer}>
            <div className={styles.leftdiv}>
                <div className={styles.logodiv}>
                <Logo coloroflogo="white"/>
                </div>
                <div className={styles.subtitlediv}>
                <h4 className={styles.subtitle}>Powered by Classy Endeavors</h4>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.upperdiv}>
                    <img className={styles.icons} src={whatsapp} alt="wp" />
                    <img className={styles.icons} src={facebook} alt="fb" />
                    <img className={styles.icons} src={linkedin} alt="ln" />
                    <img className={styles.icons} src={discord} alt="dc" />
                    <img className={styles.icons} src={mail} alt="mail" />
                    <img className={styles.icons} src={message} alt="msg" />
                </div>
                <div className={styles.lowerdiv}> 
                    <h4>Features</h4>
                    <h4>Why Choose Us</h4>
                    <h4>Pricing</h4>
                    <h4>FAQ</h4>
                    <h4>Legal terms</h4>
                    <h4>Privacy policy</h4>
                </div>
            </div>
        </div>
    );
}