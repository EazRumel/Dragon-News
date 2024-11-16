import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex items-center justify-center gap-3 bg-gray-100 p-2 mt-5'>
      <p className='bg-[#D72050]  px-3 py-1 text-base-100 rounded-lg'>Latest</p>
      <Marquee speed={100} pauseOnHover={true} direction='right' className='space-x-5'>
        <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore.</Link>
        <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore.</Link>
        <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;