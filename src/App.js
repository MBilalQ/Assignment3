import React from 'react';
import './App.css';
import Games from './games.js';

function App() {
  return (
    <div>
      <Games name="My" pcGame="Call of Duty" mobileGame="Clash Royale" physicalGame="Cricket" />
      <Games name="My Friend's" pcGame="CS GO" mobileGame="Fifa Mobile" physicalGame="Cricket" />
    </div>
  );
}

export default App;
