import styles from "../components/index.module.scss";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { Link } from "react-router-dom";
// import all from "../../../static/images/all.png";

const Home = () => {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.text_column}>
        <p className={styles.first_text}>WELCOME</p>
        <p className={styles.second_text}>TO THE POKEMON</p>
        <p className={styles.third_text}>STORE!!!</p>
        <div className={styles.first_button}>
          <button className={styles.button}>
            <Link className={styles.link} to={ROUTE_NAMES.SIGN_IN}>
              CREATE ACCOUNT
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.pikachu}></div>
    </div>
  );
};

export default Home;
