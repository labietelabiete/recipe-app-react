import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.scss';

import logo from './img/logo.png';

import Recipe from './components/Recipe/Recipe';

const App = () => {

  const APP_ID = '63f2b170';
  const APP_KEY = '4a08ea2d14cedd464084ffe10e8e60f2';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App container">
      <div className="row">
        <div className="col"></div>
        <div className="col col-3 header align-items-center text-center">
          <img src={logo} alt="" className="w-100 mb-2" />
          <h2>Search your favourite Recipe!</h2>
        </div>
        <div className="col"></div>
      </div>

      <form onSubmit={getSearch} className="search-form">

        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit"><i className="fas fa-search"></i></button>
      </form>
      <div className="recipes row d-flex justify-content-center">
        {recipes.map(recipe => (
          <Recipe
            key={uuidv4()}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
