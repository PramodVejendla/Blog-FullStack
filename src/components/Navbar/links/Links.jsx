"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

function Links() {
  const [open, setOpen] = useState(false);
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const session = true;
  const isAdmin = true;

  const menuHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "./login" }} />
        )}
      </div>
      {/* <button className={styles.menuBtn}>Menu</button> */}
      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={menuHandler}
        className={styles.menuBtn}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
