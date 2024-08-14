"use client";
import styles from '../_lib/styles/about.module.css';

function About() {
    return (
        <main className={styles.aboutPage}>
            <div className={styles.aboutContainer}>
                <h1>Who Am I? Get to Know Me!</h1>
                <p>
                    I am a Computer Engineering graduate from Singad Institute, Pune, currently working as a freelance programmer specializing in web development and cloud hosting/deployment. I enjoy sharing the technology-related knowledge I have accumulated over the years in the IT industry to help others in the developer community. Check out some of my blogs in the Blog section, and feel free to connect or follow me on my <a href='https://www.linkedin.com/in/omkarpanchalcse/' target='_blank' rel='noopener noreferrer'>LinkedIn</a> profile, where I post useful content related to programming. I am open to job opportunities where I can contribute, learn, and grow. If you have a promising opportunity that matches my skills and experience, please feel free to contact me.
                </p>
            </div>

            <section className={styles.internshipSection}>
                <h1 className={styles.experienceTitle}>Work Experience</h1>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>ACMC</h2>
                            <img src="/assets/images/img-intenship/acmcgrade.jpg" alt="ACMC Internship" />
                            <p>Description or role details for ACMC.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>SocSpace</h2>
                            <img src="/assets/images/img-intenship/socspace.jpeg" alt="SocSpace Internship" />
                            <p>Description or role details for SocSpace.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>Oasis</h2>
                            <img src="/assets/images/img-intenship/oasis.jpg" alt="Oasis Internship" />
                            <p>Description or role details for Oasis.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>Tatastu</h2>
                            <img src="/assets/images/img-intenship/tatastu.png" alt="Tatastu Internship" />
                            <p>Description or role details for Tatastu.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </main>
    );
}

export default About;
