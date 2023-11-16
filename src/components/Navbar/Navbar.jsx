import styles from "./Navbar.module.css";

import { useState } from "react";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <a className={styles.Title} href="/">
        Portfolio
      </a>
      <div className={styles.Menu}>
        <img
          className={styles.menuBtn}
          src={getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
        />
        <ul className={styles.MenuItems}>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
