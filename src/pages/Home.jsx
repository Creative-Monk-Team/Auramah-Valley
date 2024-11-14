import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

let Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <h1>This is homepage.</h1>
      <Footer />
    </div>
  );
};

export default Home;
