import React, { useState } from "react";
import "../App.css";

function PriceReducer() {
  const [reductionPrice, setReductionPrice] = useState("");
  const [reducedPrice, setReducedPrice] = useState(0);
  const [reductionPercentage, setReductionPercentage] = useState(0.05); // Default to 5%

  const handleReductionPriceChange = (e) => {
    const price = parseFloat(e.target.value);
    setReductionPrice(e.target.value);
    if (!isNaN(price)) {
      calculateReduction(price, reductionPercentage);
    }
  };

  const calculateReduction = (price, percentage) => {
    const newPrice = price * (1 - percentage);
    const finalReducedPrice = Math.floor(newPrice * 100) / 100;
    setReducedPrice(finalReducedPrice);
  };

  const handleReductionSelection = (percentage) => {
    setReductionPercentage(percentage);
    if (reductionPrice) {
      const price = parseFloat(reductionPrice);
      if (!isNaN(price)) {
        calculateReduction(price, percentage);
      }
    }
  };

  return (
    <div className="container">
      <h2>Price Reduction</h2>
      <label>
        Enter Price to Reduce:
        <input type="number" inputmode="decimal" value={reductionPrice} onChange={handleReductionPriceChange} placeholder="Enter price" />
      </label>
      <div className="button-group">
        <button className={reductionPercentage === 0.05 ? "active" : ""} onClick={() => handleReductionSelection(0.05)}>
          Reduce by 5%
        </button>
        <button className={reductionPercentage === 0.1 ? "active" : ""} onClick={() => handleReductionSelection(0.1)}>
          Reduce by 10%
        </button>
        <button className={reductionPercentage === 0.15 ? "active" : ""} onClick={() => handleReductionSelection(0.15)}>
          Reduce by 15%
        </button>
        <button className={reductionPercentage === 0.2 ? "active" : ""} onClick={() => handleReductionSelection(0.2)}>
          Reduce by 20%
        </button>
      </div>
      <div className="price-output">
        Reduced Price: <span className="price-value">${reducedPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default PriceReducer;
