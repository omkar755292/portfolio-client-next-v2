import styles from '../_lib/styles/about.module.css'

function About() {
    return (
        <main className="aboutSection">
            <div className="aboutContainer">
                <h1>Who Am I? Get to Know Me!</h1>
                <p>
                    I'm a Computer Engineering Graduate from Singad Institute, Pune, working as a Freelance Programmer proficient in Web Development and Cloud Hosting/Deployment. I like to share content related to technology that I have learned over the years in the IT industry so it can help other people in the developer community. Check out some of my blogs in the Blog section and feel free to connect or follow me on my <a href='https://www.linkedin.com/in/omkarpanchalcse/' target='_blank' rel='noopener noreferrer'>LinkedIn</a> where I post useful content related to programming. I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, you can contact me.
                </p>
            </div>

            <section className="internshipSection">
                <div className="internshipInfo">
                    <h1>I'm proud to have worked as an intern at some <br /> awesome companies:</h1>
                </div>
                <div className="internshipContainer">
                    <div className="internship">
                        <img src="/assets/images/img-intenship/acmcgrade.jpg" alt="ACMC Internship" />
                    </div>
                    <div className="internship">
                        <img src="/assets/images/img-intenship/socspace.jpeg" alt="SocSpace Internship" />
                    </div>
                    <div className="internship">
                        <img src="/assets/images/img-intenship/oasis.jpg" alt="Oasis Internship" />
                    </div>
                    <div className="internship">
                        <img src="/assets/images/img-intenship/tatastu.png" alt="Tatastu Internship" />
                    </div>
                </div>
                <hr />
            </section>
        </main>
    );
}

export default About;
