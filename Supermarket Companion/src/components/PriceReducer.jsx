import React, { useState } from "react";
import "../App.css";

function PriceReducer() {
  const [reductionPrice, setReductionPrice] = useState("");
  const [reducedPrice, setReducedPrice] = useState(0);

  const handleReductionPriceChange = (e) => {
    setReductionPrice(e.target.value);
  };

  const reducePrice = (percentage) => {
    const price = parseFloat(reductionPrice);
    if (!isNaN(price)) {
      setReducedPrice(price * (1 - percentage));
    }
  };

  return (
    <div className="container">
      <h2>Price Reduction</h2>
      <label>
        Enter Price to Reduce:
        <input type="number" value={reductionPrice} onChange={handleReductionPriceChange} placeholder="Enter price" />
      </label>
      <div className="button-group">
        <button onClick={() => reducePrice(0.05)}>Reduce by 5%</button>
        <button onClick={() => reducePrice(0.1)}>Reduce by 10%</button>
        <button onClick={() => reducePrice(0.15)}>Reduce by 15%</button>
        <button onClick={() => reducePrice(0.2)}>Reduce by 20%</button>
      </div>
      <div className="price-output">
        Reduced Price: <span className="price-value">${reducedPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default PriceReducer;
