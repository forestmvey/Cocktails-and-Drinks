import React from 'react';

const COCKTAILS = (props) =>{
    if(props.checked === true){
        return(
    <p>
        <li id={props.idDrink}>{props.strDrink}: {props.strInstructionsDE}</li>
    </p>
        )}else{
            return(null)
        }}

export default COCKTAILS;