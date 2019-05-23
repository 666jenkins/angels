import React from 'react'

const DogsMainCard = (props) => {
    return (

        <div className='dogCard'>
            <img src={props.img} alt='DogPhoto' />
            <div className='dogCardText'>
                <h2>{props.name}</h2>
                <h6>{props.gender}</h6>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default DogsMainCard