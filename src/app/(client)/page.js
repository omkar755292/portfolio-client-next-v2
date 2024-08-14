import styles from '../(client)/_lib/styles/home.module.css';

const Home = () => {
  return (
    <main>
      {/* Home Section */}
      <section className={styles.homeSection}>
        <div className={styles.homeContainer}>
          <h1>Hello there! I'm Omkar</h1>
          <p>
            A Full Stack Developer and Blogger focused on Developing Software Applications and building the
            modules that lead to the success of the overall product. <br /> I design and code beautifully simple things, and I
            love what I do.
          </p>

          <div className={styles.downloadResume}>
            <a href='/assets/omkarpanchal_resume.pdf' target="_blank" rel="noopener noreferrer">
              <img className={styles.downloadIcon} src='/assets/icons/file.png' alt='Download icon' /> Resume
            </a>
          </div>
          
          <img src='/assets/images/laptop.svg' alt="laptop image" />
        </div>

      </section>
      <hr />
    </main>
  );
};

export default Home;
