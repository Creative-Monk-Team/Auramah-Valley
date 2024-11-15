import styles from "../styles/Features.module.css";
import Button from "./Button";

const Features = () => {
  return (
    <>
      <div className={styles.FeaturesParent}>
        <div className={styles.FeaturesChild}>
          <div className={styles.FeaturesContent}>
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
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIHz.img"
              alt=""
            />
            <img
              className={styles.img2}
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIHz.img"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
