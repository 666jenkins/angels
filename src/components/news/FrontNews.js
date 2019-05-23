import React from 'react'
import newsArticles from '../news/NewsArticles'
import MainCard from './MainCard';


const FrontNews = () => {

    const latest = newsArticles.slice(0, 3)

    return latest.map(elem => {
        return <MainCard key={elem.id} id={elem.id} date={elem.date} title={elem.title} body={elem.body} img={elem.img} vid={elem.vid} />
    })
}

export default FrontNews