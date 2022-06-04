import React from 'react';
import logo from "../../logo.svg";
import styles from "./Header.module.css";

function Header() {
    return (
    <nav className={styles.main}>
        <div className={styles.divisionLeft}>
             <img  className={styles.Logo} src={logo}></img>
             <span>Company Name</span>
        </div>
        <div className={styles.divisionRight}>
        <button>Home</button>
        <button>about</button>
        <button>Home</button>
        <button>about</button>
        </div>
    </nav>
    );
}

export default Header;