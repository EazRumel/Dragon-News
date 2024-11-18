import React from 'react';
import { FaRegStar, FaRegEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
  const {news} = props || {}
  return (
    <div className="p-4 card bg-base-100 shadow-xl">
      {/* Author and Published Date */}
      <div className="flex items-center px-4 pt-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h2 className="font-bold">{news.author.name}</h2>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <button className="ml-auto text-gray-500 hover:text-primary">
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="card-title text-lg font-bold">{news.title}</h3>
      </div>

      {/* Thumbnail Image */}
      <img src={news.thumbnail_url} alt={news.title} className="w-full" />

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-700">{news.details.substring(0, 120)}...</p>
        <Link to={`/news/${news._id}`} className="text-primary font-semibold">Read More</Link>
      </div>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex items-center space-x-1 text-yellow-400">
          <FaRegStar />
          <span className="font-bold">{news.rating.number}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <FaRegEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
