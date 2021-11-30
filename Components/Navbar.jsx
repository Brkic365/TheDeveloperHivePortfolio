import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import logo from "../public/logo.svg";

import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image src={logo} alt="Logo of the company" />
      <Link href="#contact">
        <AiOutlineMenu size="1.8rem" />
      </Link>
    </div>
  );
}

export default Navbar;
