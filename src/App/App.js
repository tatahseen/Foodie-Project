import { Route, Link, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import { useState } from 'react';
import './App.css';
import GetRecipeID from '../GetRecipeID';

function App() {
  const initialState = {search:''}
  const [searchState, setSearchState] = useState(initialState);

  const handleChange = (event) => {
    setSearchState({...searchState, [event.target.id]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchState);
    setSearchState(initialState)
  }

  return (
    <div>
      <div className='top'>
      <h1>Foodie</h1>
    
      <form onSubmit={handleSubmit}>
        <label htmlFor='Search'>Search Recipes: </label>
        <input
        id='search'
        type='text'
        onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </nav>

      <section>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/breakfast" element={<GetRecipeID/>}/>
            <Route path="/lunch" element={<Lunch/>}/>
            <Route path="/dinner" element={<Dinner/>}/>
          </Routes>
      </section>
   
      
     
    </div>
  );
}

export default App;
