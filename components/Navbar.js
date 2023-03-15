import React, { useEffect, useState } from "react";

const Navbar = () => {
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
    <nav className={`navbar container ${useDarkNav ? "bg-dark" : ""}`}>
      <ul className="navbar__nav">
        <li className="navbar__nav--item hover-grow-2">
          <a className="navbar__nav--link" href="/#">
            Home
          </a>
        </li>
        <li className="navbar__nav--item hover-grow-2">
          <a className="navbar__nav--link" href="#projects">
            Projects
          </a>
        </li>
        <li className="navbar__nav--item hover-grow-2">
          <a className="navbar__nav--link" href="#about">
            About
          </a>
        </li>
        <li className="navbar__nav--item hover-grow-2">
          <a className="navbar__nav--link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
