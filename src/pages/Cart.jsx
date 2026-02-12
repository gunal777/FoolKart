import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";

const Cart = () => {
  const { products, cart, setCart } = useOutletContext();

  const cartItems = cart
    .map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleAddToCart(productId, e) {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          if (e.target.name === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return {
              ...item,
              quantity: Math.max(1, item.quantity - 1)
            };
          }
        }
        return item;
      });
    });
  }

  function handleDelete(productId) {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles["cart-pg"]}>
        <p style={{ color: "white" }}>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className={styles["cart-pg"]}>
      {cartItems.map(item => (
        <div key={item.id} className={styles.card}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.image}
          />

          <h3 className={styles.title}>
            {item.title}
          </h3>

          <p className={styles.quantity}>
            Qty: {item.quantity}
          </p>

          <p className={styles.price}>
            Item Total: ${(item.price * item.quantity).toFixed(2)}
          </p>

          <div className={styles.btnCont}>
            <button
              onClick={(e) => handleAddToCart(item.id, e)}
              name="increase"
              className={styles.button}
            >
              +
            </button>

            <button
              onClick={(e) => handleAddToCart(item.id, e)}
              name="decrease"
              className={styles.button}
            >
              -
            </button>
          </div>

          <button
            onClick={() => handleDelete(item.id)}
            className={styles.delete}
          >
            delete
          </button>
        </div>
      ))}

      <div className={styles.totalSection}>
        <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
