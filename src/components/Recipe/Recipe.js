import React from 'react';
import { v4 as uuidv4 } from "uuid";

import './Recipe.scss';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1 >{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li key={uuidv4()}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories} calories</p>
      <img className="image" src={image} alt="" />
    </div >
  );
};

export default Recipe;