import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";

let Navbar = () => {
  return (
    <div className={styles.navbar}>
      
      <div className={styles.innerNavbar}>
        <a href="/home">
          <img src={logo} alt="Logo" className={styles.logo}/>
        </a>
        <div className={styles.optionsDiv}>
          <a href="/section1">Section 1</a>
          <a href="/section2">Section 2</a>
          <a href="/section3">Section 3</a>
          <a href="/section4">Section 4</a>
          <a href="/section5">Section 5</a>
          <a href="/section6">Section 6</a>
          <a href="/section7">Section 7</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
