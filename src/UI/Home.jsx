import { NavLink } from "react-router"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles['home-pg']}>
      <h2>Welcome to FoolKart - a fake shopping experience built with React.
        Browse random products, add them to your cart, and explore how modern e-commerce works behind the scenes.
      </h2>
      <h3>Checkout our Items</h3>
      <NavLink to="shop" className={styles.btn}>Shop</NavLink>
    </div>
  );
}

export default Home;