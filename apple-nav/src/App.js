import React from 'react';
import './App.css';
import ParentNavBar from './components/ParentNavBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <ParentNavBar />
      <NavBar />
    </div>
  );
}

export default App;
