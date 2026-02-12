import { useState } from "react";

function Quantity({ onAdd }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => {
          const value = Math.max(1, Number(e.target.value) || 1);
          setQuantity(value);
        }}
      />
      <button onClick={() => {
        onAdd(quantity);
        setQuantity(1);
      }}>
        Add to cart
      </button>
    </div>
  );
}

export default Quantity;
