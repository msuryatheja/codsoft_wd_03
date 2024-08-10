import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{input}</div>
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} className="button" onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} className="button" onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} className="button" onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button
            key={value}
            className={`button ${value === '=' ? 'equalButton' : ''}`}
            onClick={() => (value === '=' ? handleCalculate() : handleClick(value))}
          >
            {value}
          </button>
        ))}
        <button className="button clearButton" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default App;
