"use client";
import styles from '../_lib/styles/about.module.css';

function About() {
    return (
        <main className={styles.aboutPage}>
            <div className={styles.aboutContainer}>
                <h1>Who Am I? Get to Know Me!</h1>
                <p>
                    I am a Computer Engineering graduate from Sinhgad Institute, Pune, and currently working as an Associate Software Engineer at AsIndia Innovations, while also taking on freelance projects as a programmer specializing in web development and cloud hosting/deployment. I enjoy sharing the technology-related knowledge I’ve gained over the years to help others in the developer community. Check out some of my blogs in the Blog section, and feel free to connect or follow me on   <a href='https://www.linkedin.com/in/omkarpanchalcse/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>, where I post useful content related to programming.
                    I am open to freelance projects, so if you have a project that matches my skills, please feel free to contact me!
                </p>
            </div>

            <section className={styles.skillsSection}>
                <h1 className={styles.skillsTitle}>Skills</h1>
                <div className={styles.skillsContainer}>
                    <ul>
                        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js, UI/UX Design</li>
                        <li><strong>Backend:</strong> Node.js, Express, MongoDB, Redis</li>
                        <li><strong>DevOps and Deployment:</strong> Docker, GitHub Actions, AWS, Nginx</li>
                        <li><strong>Real-Time Communication:</strong> WebRTC, Socket.io</li>
                        <li><strong>Others:</strong> Domain Setup and management, SEO Optimization, AWS EC2 and Server Management</li>
                        <li><strong>Version Control:</strong> Git</li>
                    </ul>
                </div>
            </section>

            <section className={styles.internshipSection}>
                <h1 className={styles.experienceTitle}>Work Experience</h1>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>AsIndia Innovations</h2>
                            <img src="/assets/images/img-intenship/asindia.svg" alt="AsIndia Innovations" />
                            <p>Associate Software Engineer</p>
                            <p className={styles.timelineDates}>
                                <span>August 2024 - Present</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>SocSpace</h2>
                            <img src="/assets/images/img-intenship/socspace.jpeg" alt="SocSpace Internship" />
                            <p>Software Developer Intern</p>
                            <p className={styles.timelineDates}>
                                <span>July 2023 - August 2023</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>Oasis</h2>
                            <img src="/assets/images/img-intenship/oasis.jpg" alt="Oasis Internship" />
                            <p>Web Desginer and Development Intern</p>
                            <p className={styles.timelineDates}>
                                <span>July 2022 - July 2022</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h2>ACMC</h2>
                            <img src="/assets/images/img-intenship/acmcgrade.jpg" alt="ACMC Internship" />
                            <p>Web Development Intern</p>
                            <p className={styles.timelineDates}>
                                <span>April 2022 - June 2022</span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>



            <hr />
        </main>
    );
}

export default About;
