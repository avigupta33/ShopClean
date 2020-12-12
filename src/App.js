import logo from './shopcleanlogo.png';
import './App.css';
import { Search } from './Search';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="shopCleanHead">
          shop clean 
        </h1>
        <Search></Search>
        
      </header>
    </div>
  );
}

export default App;
