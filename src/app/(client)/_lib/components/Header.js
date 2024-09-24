"use client"
import Link from "next/link";
import styles from '../styles/header.module.css';
import { useState } from "react";
import Head from "next/head";

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    const handleBooking = () => {
        window.open('https://calendly.com/omkarpanchal-cse/30min-business-consultation', '_blank');
    };

    return (
        <>

            <Head>
            <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Omkar Panchal",
                            "url": "https://omkarcodes.online",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Business Inquiry",
                                "url": "https://calendly.com/omkarpanchal-cse/30min-business-consultation" // Third-party URL
                            },
                            "potentialAction": {
                                "@type": "CommunicateAction",
                                "target": "https://calendly.com/omkarpanchal-cse/30min-business-consultation",
                                "name": "Business Inquiry"
                            }
                        }),
                    }}
                />
            </Head>
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
                    <button className={styles.businessInquiryButton} onClick={handleBooking}>
                        Business Inquiry
                    </button>
                    {/* <Link href="/businessInquiry" aria-label="Business Inquiry">
                    <button className={styles.businessInquiryButton}>Business Inquiry</button>
                </Link> */}

                </div>
            </div>
        </>
    );
};

export default Header;