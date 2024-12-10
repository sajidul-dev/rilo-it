import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.footer}>
      © {date.getFullYear() - 2} - {date.getFullYear()} All Rights Reserved.
      Created by RILO IT & Software Ltd.
    </div>
  );
};

export default Footer;
