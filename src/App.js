/*global chrome*/
import React, {useState, useEffect} from 'react'
import logo from './shopcleanlogo.png';
import './App.css';
import { Search } from './Search';


function App() {
  const [itemURL, setURL] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="shopCleanHead">
          Shop Clean 
        </h1>
        <Search />
        
      </header>
    </div>
  );
}

export default App;
