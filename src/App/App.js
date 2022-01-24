import { Route, Link, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <nav>
        <Link to="/"></Link>
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </nav>

      <section>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/breakfast" element={<Breakfast/>}/>
          <Route path="/lunch" element={<Lunch/>}/>
          <Route path="/dinner" element={<Dinner/>}/>
        </Routes>
        
      </section>
   
      
     
    </div>
  );
}

export default App;
