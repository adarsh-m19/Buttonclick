import React, { useState } from 'react';

function App() {
  // Initialize state for background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to change background color based on button click
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', width: '1600px', transition: 'background-color 0.5s' }}>
     <h3 style={{textAlign:'center',color:'red'}}>BACKGROUND COLOR CHANGE</h3>
      <div style={{textAlign:"center",justifyContent:'center'}} className='d-flex  justify-content-between'>
        <button style={{width:'100%',backgroundColor:'orange'}} onClick={() => changeBackgroundColor('orange')}>ORANGE</button>
        <button style={{width:'100%',backgroundColor:'white'}} onClick={() => changeBackgroundColor('white')}>WHITE</button>
        <button style={{width:'100%',backgroundColor:'green'}} onClick={() => changeBackgroundColor('green')}>GREEN</button>
      </div>
    </div>
  );
}

export default App;