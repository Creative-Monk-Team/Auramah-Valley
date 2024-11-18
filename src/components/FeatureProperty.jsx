import styles from "../styles/FeatureProperty.module.css";
import bigImage from "../assets/homeThree.jpg";
import smallImage from "../assets/homeTwo.jpg";
import Button from "./Button";

let FeatureProperty = () => {
  return (
    <div className={styles.FeatureProperty}>
      <div className={styles.innerFeatureProperty}>

        <div className={styles.FeaturePropertyContent}>
          <div className={styles.yellowLineFlex}>
            <h5>Feature Property </h5>
            <div></div>
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
        <div className={styles.imageSection}>
          <img alt="First Image" className={styles.bigImage} src={bigImage} />
          <img
            alt="Small Image"
            className={styles.smallImage}
            src={smallImage}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
