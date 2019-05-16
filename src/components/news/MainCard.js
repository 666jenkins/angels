import React from 'react'
import './newsCard.css'

const MainCard = (props) => {
    return (
        <div className='mainCard'>
            <img src={props.img} alt='NewsPhoto' />
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p><small>{props.date}</small></p>

        </div>
    )
}

export default MainCard