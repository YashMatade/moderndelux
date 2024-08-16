import React from 'react';
import './Styles.css'; // Ensure this points to your CSS file

const VegNonVegSymbols = () => {
  return (
    <div>
      <div className="symbol-container">
        <div className="symbol veg">
          <div className="dot"></div>
          <div className="label">VEG</div>
        </div>
        <div className="symbol nonveg">
          <div className="dot"></div>
          <div className="label">NON-VEG</div>
        </div>
      </div>
      <div className="text-container">
        <div className="title">Choice Is Yours</div>
        <div className="subtitle">Yes provide Veg and Non-veg</div>
      </div>
    </div>
  );
};

export default VegNonVegSymbols;
