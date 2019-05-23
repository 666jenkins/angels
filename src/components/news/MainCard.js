import React from 'react'
import './newsCard.css'

const MainCard = (props) => {

    function setDimensions({ target: img }) {
        if (img.offsetHeight > img.offsetWidth) {
            img.style.height = "auto";
            img.style.width = "100%";
        } else {
            img.style.height = "100%";
            img.style.width = "auto";
        }
    }

    return (
        <div className='mainCard'>
            <img src={props.img} onLoad={setDimensions} alt='NewsPhoto' />
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.body}</p>
                <p><small>{props.date}</small></p>
            </div>
        </div>
    )
}

export default MainCard