import styles from "../styles/About.module.css";
import bg from "../assets/aboutBg.png"

let About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.innerAbout}>
        <div className={styles.imageSection}>
            <img alt="First Image" className={styles.bigImage}/>
            <img alt="Small Image" className={styles.smallImage}/>
            <img alt="Bg Image" className={styles.bgImage} src={bg}/>
            <div></div>
        </div>
        <div className={styles.aboutContent}>
          <h1>This is about</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
