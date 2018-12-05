import React from 'react';
import favDrinks from './FavDrinksForm';

const DRINK = (props) =>{
        return(
        <div className='drinkRecipe'>
        <img src={props.image} className='drink' alt='' />
        <article> name: {props.name} </article>
        <article>Ingredients</article>
        <article>{props.ing1} - {props.measure1}</article>
        <article> {props.ing2} - {props.measure2}</article>
        <article>{props.ing3} - {props.measure3}</article>
        <article>{props.ing4} - {props.measure4}</article> 
        <article>Instructions</article>
        <article> {props.instructions} </article>
        </div>
        )}

export default DRINK;