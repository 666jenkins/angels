import React from 'react'

const DogsMainCard = (props) => {
    return (

        <div className='dogCard'>
            <img src={props.img} alt='DogPhoto' />
            <p>{props.gender}</p>
            <div className='dogCardText'>
                <h2>{props.name}</h2>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default DogsMainCard