import React from "react";
import styles from "./Header.module.scss";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Taha</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles["nav--open"] : {}} `}
          >
            <a href="/" className={styles.nav__item}>
              Page One
            </a>
            <a href="/" className={styles.nav__item}>
              Page Two
            </a>
            <a href="/" className={styles.nav__item}>
              Page Three
            </a>
            <div className={styles.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className={styles.button}>Click me</button>;
};

export default Header;
