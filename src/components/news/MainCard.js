import React from 'react'
import './newsCard.css'

const MainCard = (props) => {
    return (
        <div className='mainCard'>
            <h1>{props.title}</h1>
            <img src={props.img} alt='NewsPhoto' />
            <p>{props.body}</p>
            <p><small>{props.date}</small></p>

        </div>
    )
}

export default MainCard