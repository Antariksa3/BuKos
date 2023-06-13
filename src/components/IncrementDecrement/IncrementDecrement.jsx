import React, { useState } from 'react';
import './IncrementDecrement.css'; // Impor file CSS yang berisi gaya komponen

function IncrementDecrement() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="increment-decrement">
      <div className="button-group">
        <button onClick={handleDecrement}>-</button>
      <h2>{count}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default IncrementDecrement;
