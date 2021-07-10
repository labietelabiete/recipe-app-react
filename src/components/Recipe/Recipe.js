import React from 'react';
import { v4 as uuidv4 } from "uuid";

import './Recipe.scss';

const Recipe = ({ title, image, ingredients, url }) => {
  return (
    <div className="recipe container col col-5">
      <div className="row recipe-header">
        <div className="col col-7 d-flex align-items-center text-center">
          <h1 className="recipe-title">{title}</h1>
        </div>
        <div className="col col-5 d-flex align-items-center justify-content-center">
          <img className="recipe-image w-100" src={image} alt="" />
        </div>
      </div>
      <div className="row recipe-ingredients">
        <div className="col col-12 d-flex align-items-center text-center">
          <ol>
            <h3 className="ingredients-title">Ingredients</h3>
            {ingredients.map(ingredient => (
              <li key={uuidv4()}>{ingredient.text}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col col-6 m-0 p-0">
        </div>
        <div className="col col-6 d-flex align-items-center justify-content-end m-0 p-0">
          <a href={url} target="_blank" className="recipe-url">Read more</a>
        </div>
      </div>
    </div >
  );
};

export default Recipe;