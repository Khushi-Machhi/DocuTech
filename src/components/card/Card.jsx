import React from "react";
import styles from "./Card.module.css";

export default function Card({plan, name, price, minTotal, features }) {
  return(
  <div className={styles.card}>
    <h2>{name}</h2>
    <p className={styles.price}>
      USD <sub><span className={styles.prc}>{price}</span></sub> / {plan}
    </p>
    {minTotal && <p className={styles.mintotal}>Min total: USD {minTotal}/{plan}</p>}
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className={styles.selectplanbtn}>Select Plan</button>
  </div>
  );
}

