import React from "react";
import Image from "next/dist/client/image";
import styles from "../styles/Offer.module.scss";

function Offer({ icon, alt, title, text }) {
  return (
    <div className={styles.offer}>
      <Image src={icon} alt={alt} width="40%" height="40%" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Offer;
