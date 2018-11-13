import React from 'react';

const SITES = (props) =>{
    if(props.checked === true){
        return(
    <p>
        <li id={props.id}>{props.name}: <a href={props.website} color={props.color}>{props.website}</a></li>
    </p>
        )}else{
            return(null)
        }}

export default SITES;