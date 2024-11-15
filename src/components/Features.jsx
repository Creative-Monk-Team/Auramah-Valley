import styles from "../styles/Features.module.css";
import checkMark from "../assets/check.svg";

const Features = () => {
  return (
    <>
      <div className={styles.FeaturesParent}>
        <div className={styles.FeaturesChild}>
          <div className={styles.FeaturesContent}>
            <h1>Lets Find Out Right Selling Options For You </h1>
            <p className={styles.FeaturesContentPara}>
              As the complexity of building to increase, the field or
              architecture
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
              <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
              <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
              <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <button className={styles.learnMore}>
              Learn More <span className={styles.arrow}>→</span>
            </button>
          </div>
          <div className={styles.FeaturesImage}>
             <img className={styles.img1}
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIHz.img"
              alt=""
             />
             <img className={styles.img2}
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
