import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const onClickIncrement = () => {
    setCount(count + 1);
    if (error) setError(false);
  };
  const onClickDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError(true);
    }
  };
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        The Counter is currently <span data-test="count">{count}</span>
      </h1>
      <div
        data-test="error-message"
        className={`error ${error ? '' : 'hidden'}`}
      >
        <h2>The counter cannot go below 0</h2>
      </div>

      <button onClick={onClickIncrement} data-test="increment-button">
        Increment counter
      </button>
      <button onClick={onClickDecrement} data-test="decrement-button">
        Decrement counter
      </button>
    </div>
  );
}

export default App;
