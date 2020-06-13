import React from 'react';
import './App.css';
import Games from './games.js';

function App() {
  return (
    <div>
      <Games name="My" pcGame="Call of Duty" mobileGame="Clash Royale" physicalGame="Cricket" />
      <Games name="My Friend's" pcGame="CS GO" mobileGame="PUBG" physicalGame="Cricket" />
    </div>
  );
}

export default App;
