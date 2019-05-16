import React from 'react'
import newsArticles from '../news/NewsArticles'
import AllNews from './AllNews';

class News extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        this.setState({
            articles: newsArticles
        });
    }
    render() {
        const articles = this.state.articles;
        if (articles.length === 0) {
            return "loading..."
        }
        return (
            <div className='newsPageBg'>
                <h1>News</h1>
                <div className='newsPage'>
                    < AllNews articles={articles} />
                </div>
            </div>
        )

    }
}


export default News