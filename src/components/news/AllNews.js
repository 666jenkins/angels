import React from 'react'
import MainCard from './MainCard';


const AllNews = (props) => {
    return props.articles.map(elem => {
        return (
            <MainCard key={elem.id} id={elem.id} date={elem.date} title={elem.title} body={elem.body} img={elem.img} vid={elem.vid} />
        )
    })
}

export default AllNews