import styles from "./Button.module.css";

export default function Button({name,action}) {
    return(
        <div className={styles.btn} onClick={action}>
            {name}
        </div>
    );
}