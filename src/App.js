import { useState } from 'react';
import './App.css';

function App() {
  const [left, setLeft] = useState(0);
  const [down, setDown] = useState(0);

  const rightMove = () => {
    const valueStillInBounds = left < 750;
    if (valueStillInBounds) setLeft(left + 50);
  };

  const leftMove = () => {
    const valueStillInBounds = left > 0;
    if (valueStillInBounds) setLeft(left - 50);
  };

  const uptMove = () => {
    const valueStillInBounds = down > 0;
    if (valueStillInBounds) setDown(down - 50);
  };

  const downMowe = () => {
    const valueStillInBounds = down < 750;
    if (valueStillInBounds) setDown(down + 50);
  };

  return (
    <div>
      <div className="main-block">
        <div className="center-block">
          <div
            className="midle-block"
            style={{ transform: `translate(${left}px, ${down}px` }}
          />
        </div>
      </div>
      <div className="button-block">
        <div className="button-right" onClick={rightMove}>
          RIGHT
        </div>
        <div className="button-left" onClick={leftMove}>
          LEFT
        </div>
        <div className="button-up" onClick={uptMove}>
          UP
        </div>
        <div className="button-down" onClick={downMowe}>
          DOWN
        </div>
      </div>
    </div>
  );
}

export default App;
