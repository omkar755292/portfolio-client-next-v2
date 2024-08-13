import Link from "next/link";
import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/assets/images/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className={styles.navlink}>
                    <Link href="/" aria-label="Home">Home</Link>
                    <Link href="/about" aria-label="About Me">About Me</Link>
                    <Link href="/blogs" aria-label="Blogs">Blogs</Link>
                    <Link href="/projects" aria-label="Projects">Projects</Link>
                    <Link href="/contact" aria-label="Contact Me">Contact Me</Link>
                </div>

                <Link href="/businessInquiry" aria-label="Business Inquiry">
                    <button className={styles.businessInquiryButton}>Business Inquiry</button>
                </Link>

            </div>
        </div>
    );
};

export default Header;
