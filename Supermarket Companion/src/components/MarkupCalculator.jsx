import React, { useState } from "react";
import "../App.css";

function MarkupCalculator() {
  const [basePrice, setBasePrice] = useState("");
  const [markedUpPrice, setMarkedUpPrice] = useState(0);

  const handleBasePriceChange = (e) => {
    setBasePrice(e.target.value);
  };

  const applyMarkup = (multiplier) => {
    const price = parseFloat(basePrice);
    if (!isNaN(price)) {
      setMarkedUpPrice(price * multiplier);
    }
  };

  return (
    <div className="container">
      <h2>Markup Calculator</h2>
      <label>
        Enter Market Price:
        <input type="number" value={basePrice} onChange={handleBasePriceChange} placeholder="Enter base price" />
      </label>
      <div className="button-group">
        <button onClick={() => applyMarkup(1.5)}>1.5x Markup</button>
        <button onClick={() => applyMarkup(1.75)}>1.75x Markup</button>
        <button onClick={() => applyMarkup(2)}>2x Markup</button>
      </div>
      <div className="price-output">
        Marked Up Price: <span className="price-value">${markedUpPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default MarkupCalculator;
