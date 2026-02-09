import { useState } from "react" 

const Item = ({product, key}) => {
    // const [count, setCount] = useState(1);

    return (
        <div className="card" key={key}>
            <img src={product.image}></img>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Item;