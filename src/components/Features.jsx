import styles from "../styles/Features.module.css";

const Features = () => {
    return(
        <>
        <div className={styles.FeaturesParent}>
            <div className={styles.FeaturesChild}>
                <div className={styles.FeaturesContent}>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cupiditate iusto, illo officia blanditiis aspernatur doloremque iste 
                    </p>
                </div>
                <div className={styles.FeaturesImage}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Features;