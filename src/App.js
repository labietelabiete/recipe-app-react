import React, { useEffect, useState } from "react";
import './App.css';

import Recipe from './Recipe';

const App = () => {

  const APP_ID = '63f2b170';
  const APP_KEY = '4a08ea2d14cedd464084ffe10e8e60f2';

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;
