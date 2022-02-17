import React from 'react';
import ColoredBlock from './ColoredBlock';
function Car(props) {
  return <h5>I am a { props.brand.model }!</h5>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Ecosport" };
  return (
    <>
	    <h3>What is the car</h3>
	    <Car brand={ carInfo } />
      <div className="main-content">
          <ColoredBlock />
        </div>
    </>
  );
}

export default Garage;