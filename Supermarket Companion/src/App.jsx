import React from "react";
import MarkupCalculator from "./components/MarkupCalculator";
import PriceReducer from "./components/PriceReducer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="title-container">
        <h1 className="title">Supermarket Companion</h1>
      </div>
      <div className="container-wrapper">
        <MarkupCalculator />
        <PriceReducer />
      </div>
    </div>
  );
}

export default App;
