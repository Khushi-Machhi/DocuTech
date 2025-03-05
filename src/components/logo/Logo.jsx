import Icon from "../../assets/Icon.svg";
import logo from "../../assets/footer/logo.svg";
import styles from "./Logo.module.css";

export default function Logo({coloroflogo}){
    if(coloroflogo==='white'){
        return (
            <>
            <img className={styles.whiteimg} src={logo} alt="svg" />
            <h2 className={styles.whitename}>DocuTech</h2>
            </>
        );
    }else{
    return(
        <>
        <img className={styles.img} src={Icon} alt="svg" />
        <h1 className={styles.name}>DocuTech</h1>
        </>
    );
    }
}