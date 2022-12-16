import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOppen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">AV0CAD0</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOppen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vh" }}
        onClick={() => setOppen(false)}
      >
        <li className={styles.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
