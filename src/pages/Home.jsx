import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

let Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Banner/>
      <Footer />
    </div>
  );
};

export default Home;
