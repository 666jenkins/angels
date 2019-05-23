import React from 'react'
import DogsMainCard from './DogsMainCard';


const AllOurDogs = (props) => {
    return props.dog.map(elem => {
        return (
            <DogsMainCard key={elem.id} id={elem.id} name={elem.name} gender={elem.gender} rase={elem.rase} img={elem.img} body={elem.body} />
        )
    })
}

export default AllOurDogs