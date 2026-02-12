import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

const NavBar = ({ totalItems }) => {
  return (
    <header className={styles.navBar}>
      <h2 className={styles.title}>FoolKart</h2>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.btn}>
          Home
        </NavLink>
        <NavLink to="/shop" className={styles.btn}>
          Shop
        </NavLink>
        <NavLink to="/cart" className={styles.btn}>
          {totalItems === 0 ? "Cart" : `Cart(${totalItems})`}
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
