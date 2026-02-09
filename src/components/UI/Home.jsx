import { Link } from "react-router"

const Home = () => {
  return (
    <div className="home-pg">
      <h2>Welcome to FoolKart - a fake shopping experience built with React.
        Browse random products, add them to your cart, and explore how modern e-commerce works behind the scenes.
      </h2>
      <h3>Checkout our Items</h3>
      <Link to="shop"><button>Shop</button></Link>
    </div>
  );
}

export default Home;