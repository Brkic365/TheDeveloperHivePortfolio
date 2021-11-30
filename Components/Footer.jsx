import React from 'react'
import Link from "next/link"
import styles from "../styles/Footer.module.scss"

import { IoCallSharp, IoMailSharp } from "react-icons/io5"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.blocks}>
                <div className={styles.main}>
                <h3>The Developer Hive</h3>
                <p>We are a group of talented, hard-working and highly 
                    motivated full-stack web developers from various cities 
                    of Croatia. Our team has years of experience with various 
                    different technologies and is willing to constantly improve 
                    and learn new technologies.</p>
                </div>

                <div className={styles.contact}>
                <h3>Contact Us</h3>
                    <div className={styles.contactField}>
                        <IoCallSharp />
                        <p>+385 95 760 2280</p>
                    </div>
                    <div className={styles.contactField}>
                        <IoMailSharp />
                        <p>thedeveloperhive@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <p>Copyright © 2021 <span>The Developer Hive</span>. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
