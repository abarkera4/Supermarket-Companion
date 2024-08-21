import React, { useState } from "react";
import "../App.css";

function MarkupCalculator() {
  const [basePrice, setBasePrice] = useState("");
  const [markupMultiplier, setMarkupMultiplier] = useState(1.5);
  const [markedUpPrice, setMarkedUpPrice] = useState(0);
  const [profitPerUnit, setProfitPerUnit] = useState(0);

  const handleBasePriceChange = (e) => {
    const price = parseFloat(e.target.value);
    setBasePrice(e.target.value);
    if (!isNaN(price)) {
      calculateMarkup(price, markupMultiplier);
    }
  };

  const calculateMarkup = (price, multiplier) => {
    const markedPrice = price * multiplier;
    const finalMarkedPrice = Math.floor(markedPrice * 100) / 100;
    setMarkedUpPrice(finalMarkedPrice);
    const profit = finalMarkedPrice - price;
    setProfitPerUnit(profit);
  };

  const handleMarkupSelection = (multiplier) => {
    setMarkupMultiplier(multiplier);
    if (basePrice) {
      const price = parseFloat(basePrice);
      if (!isNaN(price)) {
        calculateMarkup(price, multiplier);
      }
    }
  };

  return (
    <div className="container">
      <h2>Markup Calculator</h2>
      <label>
        Enter Market Price:
        <input type="number" inputmode="decimal" value={basePrice} onChange={handleBasePriceChange} placeholder="Enter base price" />
      </label>
      <div className="button-group">
        <button className={markupMultiplier === 1.5 ? "active" : ""} onClick={() => handleMarkupSelection(1.5)}>
          1.5x Markup
        </button>
        <button className={markupMultiplier === 1.75 ? "active" : ""} onClick={() => handleMarkupSelection(1.75)}>
          1.75x Markup
        </button>
        <button className={markupMultiplier === 2 ? "active" : ""} onClick={() => handleMarkupSelection(2)}>
          2x Markup
        </button>
      </div>
      <div className="price-output">
        Marked Up Price: <span className="price-value">${markedUpPrice.toFixed(2)}</span>
      </div>
      <div className="profit-output">
        <div className="profit-label">Profit Per Unit:</div>
        <div className="profit-value">${profitPerUnit.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default MarkupCalculator;
