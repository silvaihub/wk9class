import React from 'react'

export default function card(props) {
    return (
        <div>
            <h2>{props.myProduct.title}</h2>
            <p>{props.myProduct.des}</p>
            <p>{props.myProduct.price}</p>
            <button onClick= {props.myClick}>Click for Title</button>
            
        </div>
    )
}
