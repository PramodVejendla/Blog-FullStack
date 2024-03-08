import styles from "./navbar.module.css";
import React from "react";
import Links from "./links/Links";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <Links />
    </div>
  );
}

export default Navbar;
