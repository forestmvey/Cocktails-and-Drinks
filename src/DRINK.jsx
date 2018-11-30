import React from 'react';

const DRINK = (props) =>{
        return(
    <p>
        <li id={props.idDrink}>id : {props.id} name: {props.name} </li>
    </p>
        )}

export default DRINK;