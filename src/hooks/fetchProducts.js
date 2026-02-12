import { useState, useEffect } from "react";

const ItemData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        if (!res.ok) {
          throw new Error("server error");
        }
        const data = await res.json();
        console.log(data)
        setProducts(data);
      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])

  const productsWithQty = products.map(p => ({
    ...p,
    quantity: 0
  }));
  return { products: productsWithQty, error, loading };

}

export default ItemData;