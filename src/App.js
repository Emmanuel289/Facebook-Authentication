import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Facebook from './components/facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Facebook Authentication and Social Media Share</h1>
        <p>
          To get started, sign in with facebook
        </p>
        <Facebook />
      </header>
    </div>
  );
}

export default App;
