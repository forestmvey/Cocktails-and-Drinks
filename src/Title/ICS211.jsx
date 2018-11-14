import React from 'react';
import './Title.css'

const ICS211 = (props) =>
    <div className="titleStyle">
        <h1 id={props.title}>{props.title}</h1>
        <h2 id={props.subtitle}>{props.subtitle}</h2>
    </div>

export default ICS211;