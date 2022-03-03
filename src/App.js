import styled from 'styled-components';
import { useState } from 'react';
import './App.css';

function App() {
  const [left, setLeft] = useState(0);
  const [down, setDown] = useState(0);

  const rightMove = () => {
    left < 750 ? setLeft(left + 50) : setLeft(750);
  };

  const leftMove = () => {
    left > 0 ? setLeft(left - 50) : setLeft(0);
  };

  const uptMove = () => {
    down > 0 ? setDown(down - 50) : setDown(0);
  };

  const downMowe = () => {
    down < 750 ? setDown(down + 50) : setDown(750);
  };

  console.log(left);

  return (
    <div>
      <div className="mainDiv">
        <CenterDiv>
          <div
            className="midleDiv"
            style={{ transform: `translate(${left}px, ${down}px` }}
          />
        </CenterDiv>
      </div>
      <ButtonDiv>
        <div className="div4" onClick={rightMove}>
          RIGHT
        </div>
        <div className="div3" onClick={leftMove}>
          LEFT
        </div>
        <div className="div1" onClick={uptMove}>
          UP
        </div>
        <div className="div2" onClick={downMowe}>
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
