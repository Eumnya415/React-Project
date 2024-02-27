import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';

const NewsList = ({category}) => {
    const [articles,setArticles] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(
        () => {
        const fetchData = async () => {
            const query = category == 'all' ? '' : '&category='+category;
            const apiUrl = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=822dc0d8a8294d50b70237bbe4bb4408" + query;
            const response = await axios.get(apiUrl);
            setArticles(response.data.articles);
        };
        fetchData();
    },[category]
    );
    if(loading){
        return <>대기중...</>;
    }
    if(!articles){
        return null;
    }
    return (
        <>
            {articles.map((article) => (<NewsItem key={article.url} article={article} />))}
        </>
    );
};

export default NewsList;