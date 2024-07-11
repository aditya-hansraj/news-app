import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
            }).catch(err => {
                console.log(err)
            });
    }, [category]);

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span> <span>{category != 'general' ? `on ${category.charAt(0).toUpperCase() + category.slice(1)}` : ""} </span></h2>
            {articles.map((article, index) => {
                return(
                    <NewsItem
                        key={index}
                        title={article.title}
                        description={article.description}
                        src={article.urlToImage}
                        url={article.url}
                    />
                );
            })}
        </div>
    )
}

export default NewsBoard
