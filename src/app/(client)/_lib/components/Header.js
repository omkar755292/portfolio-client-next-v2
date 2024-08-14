"use client"
import Link from "next/link";
import styles from '../styles/header.module.css';
import { useState } from "react";

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/assets/images/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className={`${styles.navlink} ${isNavOpen ? styles.displayNone : ''}`}>
                    <Link href="/" aria-label="Home">Home</Link>
                    <Link href="/about" aria-label="About Me">About Me</Link>
                    <Link href="/blogs" aria-label="Blogs">Blogs</Link>
                    <Link href="/projects" aria-label="Projects">Projects</Link>
                    <Link href="/contact" aria-label="Contact Me">Contact Me</Link>
                    <button className={styles.burger} onClick={toggleNav}>
                        <img src="/assets/icons/arrowdown.png" alt="downarrow" />
                    </button>
                </div>
                <Link href="/businessInquiry" aria-label="Business Inquiry">
                    <button className={styles.businessInquiryButton}>Business Inquiry</button>
                </Link>

            </div>
        </div>
    );
};

export default Header;
