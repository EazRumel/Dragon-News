import React from 'react';
import Header from '../components/Header';
import RightNav from '../components/layoutComponents/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CardDetails = () => {
  const data = useLoaderData()
  const news = data.data[0]
  console.log(news)
  return (
    <div>
     <header>
     <Navbar></Navbar>
     <Header></Header>
     </header>
     <main className='w-11/12 grid grid-cols-12 gap-5 mx-auto'>
     
     <section className='col-span-9'>
     <h1>Dragon News</h1>
     <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h1 className='font-bold text-5xl'>{news.title}</h1>
    <h2 className="card-title mt-5">{news.details}</h2>
    <div className="card-actions">
      <Link to={`/category/${news.category_id}`} className="btn text-white btn-outline bg-[#D72050]">All News In this Category</Link>
    </div>
  </div>
</div>
     </section>
     <aside className='col-span-3'>
      <RightNav></RightNav>
     </aside>
     </main>
    </div>
  );
};

export default CardDetails;