import { useState, useEffect } from "react";
import Item from "../UI/Item";

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
                console.log(data);
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div>
            {products.map((product) => (
                <Item product={product} key={product.id} />
            ))
        }
        </div>
    )
}

export default ItemData;