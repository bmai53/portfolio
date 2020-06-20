import React from 'react';
import emoji from './emoji.png'
import './App.css'

function App() {
  return (
    <div>
      <h1>Hello please hire me</h1> 
      <img src={emoji} alt="please" style={{height: 200}}/>
    </div>
  );
}

export default App;
