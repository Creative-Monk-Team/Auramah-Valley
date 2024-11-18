import styles from "../styles/Explore.module.css";

const Explore = () => {
  return (
    <>
      <div className={styles.ExploreParent}>
        <div className={styles.ExploreChild}>
          <div className={styles.ExploreHeading}>
            <div className={styles.yellowLineFlex}>
              <div></div>
              <h5>Explore</h5>
              <div></div>
            </div>
            <h1>Lorem </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur aspernatur vel officiis dignissimos placeat tempore! Laudantium, deserunt.</p>
          </div>
          <div className={styles.ExploreImageParent}>
            <div className={styles.ExploreFirstImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Lorem</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className={styles.ExploreSecondImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Lorem</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className={styles.ExploreThirdImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Lorem</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className={styles.ExploreFourthImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Lorem</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className={styles.ExploreFifthImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Lorem</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className={styles.ExploreSixImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Lorem</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Explore;
