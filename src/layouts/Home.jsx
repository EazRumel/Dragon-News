import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/layoutComponents/LeftNav';
import RightNav from '../components/layoutComponents/RightNav';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <section className='w-11/12 mx-auto'>
      <LatestNews></LatestNews>
      </section>
   <nav className='w-11/12 mx-auto mt-5'>
    <Navbar></Navbar>
   </nav>
   <main className='w-11/12 grid lg:grid-cols-12 mx-auto pt-5 gap-3'>
    <aside className='left col-span-3'>
      <LeftNav></LeftNav>
    </aside>
   <section className='middle col-span-6'>middle content</section>
   <aside className='right col-span-3'>
  <RightNav></RightNav>
   </aside>
   </main>
    </div>
  );
};

export default Home;