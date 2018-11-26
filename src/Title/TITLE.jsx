import React from 'react';
import './Title.css'

const TITLE = (props) =>
    <div className="titleStyle">
        <h1 id={props.title}>{props.title}</h1>
        <h2 id={props.subtitle}>{props.subtitle}</h2>
    </div>

export default TITLE;