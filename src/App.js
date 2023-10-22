import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';

let adjustInterval = undefined;

function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
    setStarted(true);
  };

  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false);
  };

  const resetWatch = () => {
    setWatch(0);
    clearInterval(adjustInterval);
    setStarted(false);
  };

  return (
    <div className="App">
      <h1>Stop-Watch-Timer</h1>
      <h3>{watch}</h3>
      <div className="watch">
        <div >
          <Button style={{ margin: '5px' }} disabled={started} variant="contained" onClick={startWatch}>
            Start
          </Button>
          <Button style={{ margin: '5px' }} variant="contained" onClick={stopWatch}>
            Stop
          </Button>
          <Button style={{ margin: '5px' }} variant="contained" onClick={resetWatch}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
