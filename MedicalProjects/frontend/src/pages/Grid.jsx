import React from 'react';
import '../Style/card.css';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
          <div className="grid-item-content">
            Column 1
          </div>
      </div>
      <div className="grid-item">
          <div className="grid-item-content">
            Column 2
          </div>
      </div>
      <div className="grid-item">
          <div className="grid-item-content">
            Column 3
          </div>
      </div>
    </div>
  );
};

export default Grid;
