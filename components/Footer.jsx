import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact">
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" alt="" width={40} height={40} />
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM SETREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@LAMA.DEV <br /> 213 1243 12312
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          2022 LAMA INTERACTIVE, <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
