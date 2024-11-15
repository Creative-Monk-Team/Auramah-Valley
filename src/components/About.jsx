import styles from "../styles/About.module.css";
import bg from "../assets/aboutBg.png";
import bigImage from "../assets/banner2.jpg";
import smallImage from "../assets/banner3.jpg";
import Button from "./Button";

let About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.innerAbout}>
        <div className={styles.imageSection}>
          <img alt="First Image" className={styles.bigImage} src={bigImage} />
          <img
            alt="Small Image"
            className={styles.smallImage}
            src={smallImage}
          />
          <img alt="Bg Image" className={styles.bgImage} src={bg} />
          <div className={styles.imageDetailsSection}>
            <h5>Lorem heading here</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              fugit quaerat eaque ipsum enim eos
            </p>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.yellowLineFlex}>
            <div></div>
            <h5>About Us</h5>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            mollitia!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ad officiis consequuntur distinctio unde itaque eligendi suscipit
            laboriosam quod nostrum quas et ea laudantium reiciendis
            exercitationem omnis cupiditate pariatur laborum, saepe sapiente!
            Inventore et rem voluptatem similique beatae dolores aliquam
            maiores, distinctio nesciunt blanditiis mollitia praesentium odit,
            natus exercitationem nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            consectetur magni quisquam dolorem perspiciatis non fugit. Tenetur,
            dolorum natus eaque nam inventore facere pariatur accusamus
            aspernatur nesciunt quibusdam exercitationem eligendi?
          </p>
          <Button text={"Enquire Now"} />
        </div>
      </div>
    </div>
  );
};

export default About;
