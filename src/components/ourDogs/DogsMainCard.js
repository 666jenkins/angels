import React from 'react'
import './dogPage.css'

const DogsMainCard = (props) => {
    return (

        <div className='dogCard'>
            <img src={props.img} alt='DogPhoto' />
            <div className='dogCardText'>
                <h2>{props.name}</h2>
                <p>{props.body}</p>
                <p><small>{props.gender}, {props.rase}</small></p>
            </div>
        </div>
    )
}

export default DogsMainCard