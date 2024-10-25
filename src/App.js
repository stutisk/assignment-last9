import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import BrowseLibrary from './Components/BrowseLibrary';
import SearchBar from './Components/SearchBar';
import { DataProvider } from './Components/DataContext';

function App() {


  
  return (
    <DataProvider>
    <div className="App ">
      <Navbar/>


   
      <BrowseLibrary/>

    </div>
    </DataProvider>

  );
}

export default App;
