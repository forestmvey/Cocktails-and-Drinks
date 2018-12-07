import React from 'react';

const DRINK = (props) => {
    return (
        <div className='drinkRecipe'>
            <img src={props.image} className='drink' alt='' />
            <article className='instructIngred'>{props.name} </article>
            <br />
            <article>{props.ing1} {props.measure1}</article>
            <article> {props.ing2} {props.measure2}</article>
            <article>{props.ing3} {props.measure3}</article>
            <article>{props.ing4} {props.measure4}</article>
            <br />
            <article> {props.instructions} </article>
        </div>
    )
}

export default DRINK;