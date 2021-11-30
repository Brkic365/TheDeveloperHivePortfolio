import React from "react";
import styles from "../styles/Project.module.scss";

function Project({ imgUrl, title }) {
  return (
    <div className={styles.project}>
        <div className={styles.image} style={{background: `url(${imgUrl})`}} />
        <h3>{title}</h3>
    </div>
  );
}

export default Project;
