import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import BrowseLibrary from './Components/BrowseLibrary';
import SearchBar from './Components/SearchBar';

function App() {


  
  return (
    <div className="App ">
      <Navbar/>


   
      <BrowseLibrary/>

    </div>
  );
}

export default App;
