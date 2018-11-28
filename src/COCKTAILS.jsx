import React from 'react';

const COCKTAILS = (props) =>{
        return(
    <p>
        <li id={props.idDrink}>{props.strDrink}: {props.strInstructionsDE}</li>
    </p>
        )}

export default COCKTAILS;