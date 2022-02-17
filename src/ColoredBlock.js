import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component {
  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: 'black'}}>
        <ChangeColorButton ></ChangeColorButton>
      </div>
    )
  }
} 

export default ColoredBlock;