import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { AiOutlineClose } from "react-icons/ai";

import logo from "../public/logo.svg";

import { AiOutlineMenu } from "react-icons/ai";

export function MobileMenu({ open, close }) {
  return open ? (
    <div className={styles.mobileMenu}>
      <AiOutlineClose onClick={() => close(true)} />
      <ul>
        <li>
          <Link href="#aboutUs">
            <a onClick={() => close(true)}>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="#offers">
            <a onClick={() => close(true)}>What We Offer</a>
          </Link>
        </li>
        <li>
          <Link href="#prevWork">
            <a onClick={() => close(true)}>Previous Work</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a onClick={() => close(true)}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
}

export function Links() {
  return (
    <div className={styles.links}>
      <ul>
        <li>
          <Link href="#aboutUs">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="#offers">
            <a>What We Offer</a>
          </Link>
        </li>
        <li>
          <Link href="#prevWork">
            <a>Previous Work</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image src={logo} alt="Logo of the company" className={styles.logo} />
      </Link>
      <AiOutlineMenu size="1.8rem" onClick={() => setMobileMenuOpen(true)} />
      <MobileMenu
        open={mobileMenuOpen}
        close={() => setMobileMenuOpen(false)}
      />
      <Links />
    </div>
  );
}

export default Navbar;
