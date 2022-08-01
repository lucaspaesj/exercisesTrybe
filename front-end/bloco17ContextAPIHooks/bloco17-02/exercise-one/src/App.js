import React, { useState, useEffect } from 'react';
import './App.css';
import Acerto from './components/Acerto';

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const generateRandomNumber = (max, min) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    setInterval(() => setNum(generateRandomNumber(1, 100)), 10000);
  }, []);

  return (
    <div className="App">
      { num }
      { (num % 3 === 0 || num % 5 === 0) && <Acerto /> }
    </div>
  );
}

export default App;
