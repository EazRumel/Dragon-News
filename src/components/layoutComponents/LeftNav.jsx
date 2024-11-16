import React, { useEffect, useState } from 'react';

const LeftNav = () => {
  const [categories,setCategories] = useState([])
  useEffect(()=> {
   fetch("https://openapi.programming-hero.com/api/news/categories")
   .then(response => response.json())
   .then(data => setCategories(data.data.news_category))
  },[])
  return (
    <div>
      <h2>Left nav side({categories.length})</h2>
     <div className='flex flex-col gap-2'>
      {
        categories.map((category) =>(
          <button className='btn bg-base-100 border-none' key={category.category_id}>{category.category_name}</button>
        ))
      }
     </div>
    </div>
  );
};

export default LeftNav;