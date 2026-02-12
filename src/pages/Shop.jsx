import { useOutletContext } from "react-router";
import Quantity from "./Quantity";
import styles from "./Shop.module.css";

const Shop = () => {
  const { products, loading, error, setCart } = useOutletContext();

  function handleAddToCart(productId, quantity) {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);

      if (existing) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { id: productId, quantity }];
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles["shop-pg"]}>
      {products.map(product => (
        <div className={styles.card} key={product.id}>
          <img src={product.image} />
          <p>{product.title}</p>
          <p className={styles.price}>${product.price}</p>

          <Quantity
            onAdd={(qty) => handleAddToCart(product.id, qty)}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;
