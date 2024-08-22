import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const HomeMain = () => {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>Personal PhoneBook</h1>
      <div className={styles.stepList}>
        <h4 className={styles.textHeader}>To see your PhoneBook you need:</h4>
        <ul className={styles.list}>
          <li>
            <Link to="./login" className={styles.link}>
              Login
            </Link>
            <a className={styles.text}> or </a>
            <Link to="./register" className={styles.link}>
              Register
            </Link>{" "}
            <a className={styles.text}>to your account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
