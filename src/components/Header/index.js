import { ROUTE_NAMES } from "../../router/routeNames";
import { Link } from "react-router-dom";
import styles from "../Header/index.module.scss";
import pikachu from "../../static/images/pikachu.png";
import shopping_cart from "../../static/images/shopping_cart.png";
import pokeball from "../../static/images/pokeball.png";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.pikachu} src={pikachu} alt="logo" />
      </div>
      <div className={styles.sign}>
        <button className={styles.button_style}>
          <Link className={styles.link} to={ROUTE_NAMES.HOME}>
            Home
          </Link>
        </button>
        {/* <button className={styles.button_style}>
          <Link className={styles.link} to={ROUTE_NAMES.SIGN_UP}>
            Sign Up
          </Link>
        </button> */}
        <button className={styles.button_style}>
          <Link className={styles.link} to={ROUTE_NAMES.SIGN_IN}>
            Sign In
          </Link>
        </button>
        <button className={styles.button_style}>
          <Link className={styles.link} to={ROUTE_NAMES.POKEMONS}>
            Pokemons
          </Link>
        </button>
      </div>
      <div>
        <img className={styles.shopping_cart} src={shopping_cart} alt="logo" />
        <img className={styles.pokeball} src={pokeball} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
