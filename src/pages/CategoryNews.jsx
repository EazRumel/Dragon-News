import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from "../../src/components/NewsCard"

const CategoryNews = () => {
   const {data  : news} = useLoaderData()
   console.log(news)
  return (
    <div>
      <h2 className='font-bold mb-3'>Dragon News Home</h2>
    <p>Category({news.length})</p>
    <div>
      {
        news.map((singleNews) => (
          <NewsCard news={singleNews}></NewsCard>
        ))
      }
    </div>
    </div>
  );
};

export default CategoryNews;