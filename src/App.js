import React from 'react';
import './App.css';
import Mainnav from './Components/Mainnav'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
    
     <Mainnav></Mainnav>
     <Home></Home>
     
    </div>
  );
}

export default App;
