import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = ({ isDark = false }) => {
  const [useDarkNav, setUseDarkNav] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        setUseDarkNav(true);
      } else {
        setUseDarkNav(false);
      }
    };
  }, []);

  return (
    <nav
      className={`${styles["navbar"]} container ${
        useDarkNav || isDark ? styles["bg-dark"] : null
      }`}
    >
      <ul className={styles["navbar__nav"]}>
        <li className={`${styles["navbar__nav--item"]} hover-grow-2`}>
          <a className={styles["navbar__nav--link"]} href="/#">
            Home
          </a>
        </li>
        <li className={`${styles["navbar__nav--item"]} hover-grow-2`}>
          <a className={styles["navbar__nav--link"]} href="/#skills">
            Skills
          </a>
        </li>
        <li className={`${styles["navbar__nav--item"]} hover-grow-2`}>
          <a className={styles["navbar__nav--link"]} href="/blog">
            Blog
          </a>
        </li>
        <li className={`${styles["navbar__nav--item"]} hover-grow-2`}>
          <a className={styles["navbar__nav--link"]} href="/#about">
            About
          </a>
        </li>
        <li className={`${styles["navbar__nav--item"]} hover-grow-2`}>
          <a className={styles["navbar__nav--link"]} href="/#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
