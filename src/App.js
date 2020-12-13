/*global chrome*/
import React, {useState, useEffect} from 'react'
import logo from './shopcleanlogo.png';
import './App.css';
import { Search } from './Search';


function App() {
  const [itemURL, setURL] = useState("");
  /* get current tab url and set url state to resultant url */
  useEffect(() => {
    chrome.runtime.sendMessage({type: 'popupInit'}, setURL);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="shopCleanHead">
          Shop Clean 
        </h1>
        <Search 
          item_url = {itemURL}/>
        
      </header>
    </div>
  );
}

export default App;
