import React from 'react';

const COCKTAILS = (props) =>{
        return(
    <p>
        <li id={props.idDrink}>id : {props.id} name: {props.name} </li>
    </p>
        )}

export default COCKTAILS;