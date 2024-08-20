/*import React from "react";
import './App.css';
//import Task2 from "./Components/Task2/Task2";
//import Task1 from "./Components/Task1/Task1";
import Task3 from "./Components/Task3/Task3";
function App(){
  return(
    <> 
    <Task3/>
    </>
  );
}
export default App;*/


import logo from './logo.svg';
import './App.css';
import Home from './Components/Task4/Home';
import About from './Components/Task4/About';
import Portfolio from './Components/Task4/Project';
import Contact from './Components/Task4/Contact';
import {BrowserRouter,Route,Routes } from 'react-router-dom';


  function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route> 
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
