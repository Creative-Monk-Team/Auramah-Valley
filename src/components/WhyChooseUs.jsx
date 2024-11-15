import styles from "../styles/WhyChooseUs.module.css";
import WhyImage from "../assets/whychooseus.png";
import whyImg1 from "../assets/whyImg1.png";
import whyImg2 from "../assets/whyImg2.png";
import whyImg3 from "../assets/whyImg3.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className={styles.WhyChooseUsParent}>
        <div className={styles.WhyChooseUsChild}>
          <div className={styles.WhyChooseUsContent}>
          <div className={styles.yellowLineFlex}>
            <h5>Why Choose Us</h5>
            <div></div>
          </div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p className={styles.WhyChooseUsContentPara}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos cupiditate suscipit eius aut eveniet. Doloremque, eum
              tempore! Excepturi nostrum aperiam commodi nulla nihil, animi ad
              impedit accusantium
            </p>
            <div className={styles.WhyChooseUsListParent}>
              <div>
                <img src={whyImg1} alt="" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Lorem</h3>
                 <p>Lorem ipsum dolor amet.</p>
              </div>
            </div>
            <div className={styles.WhyChooseUsListParent}>
              <div>
              <img src={whyImg2} alt="" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Lorem</h3>
                 <p>Lorem ipsum dolor amet.</p>
              </div>
            </div>
            <div className={styles.WhyChooseUsListParent}>
              <div>
              <img src={whyImg3} alt="" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Lorem</h3>
                 <p>Lorem ipsum dolor amet.</p>
              </div>
             
            </div>
          </div>
          <div className={styles.WhyChooseUsImage}>
            <img
              className={styles.img1}
              src={WhyImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}; 
export default WhyChooseUs;
