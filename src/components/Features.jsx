import styles from "../styles/Features.module.css";
import Button from "./Button";
import featImg1 from "../assets/featImg1.jpg";
import featImg2 from "../assets/featImg2.jpg";

const Features = () => {
  return (
    <>
      <div className={styles.FeaturesParent}>
        <div className={styles.FeaturesChild}>
          <div className={styles.FeaturesContent}>
          <div className={styles.yellowLineFlex}>
            <h5>Featured Project</h5>
            <div></div>
          </div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p className={styles.FeaturesContentPara}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos cupiditate suscipit eius aut eveniet. Doloremque, eum
              tempore! Excepturi nostrum aperiam commodi nulla nihil, animi ad
              impedit accusantium in? Vel, cum.
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <span className={styles.encquireNowButton}>
              <Button text={"Learn More"} />
            </span>
          </div>
          <div className={styles.FeaturesImage}>
            <img
              className={styles.img1}
              src={featImg1}
              alt=""
            />
            <img
              className={styles.img2}
              src={featImg2}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
