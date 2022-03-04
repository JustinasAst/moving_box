import styled from 'styled-components';
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
      <div className="main-div">
        <CenterDiv>
          <div
            className="midle-div"
            style={{ transform: `translate(${left}px, ${down}px` }}
          />
        </CenterDiv>
      </div>
      <ButtonDiv>
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
      </ButtonDiv>
    </div>
  );
}

export default App;

const CenterDiv = styled.div`
  box-sizing: border-box;
  width: 800px;
  height: 800px;
  background-color: green;
  position: relative;
`;

const ButtonDiv = styled.div`
  box-sizing: border-box;
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  div {
    background: gray;
    padding: 5px 0;
    border-radius: 5px;
    color: white;
    text-align: center;

    cursor: pointer;
    -moz-user-select: none;
    user-select: none;
  }
`;
