import React from 'react';

const DRINK = (props) =>{
        return(
    <p>
        <li id={props.idDrink}>id : {props.id} name: {props.name} </li>
        <li>Instructions: {props.instructions}</li>
        <li>Ingredients: {props.ing1}, {props.ing2}, {props.ing3}, {props.ing4}</li> 
    </p>
        )}

export default DRINK;