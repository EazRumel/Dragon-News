import React from 'react';
import LoginWith from './LoginWith';
import FindUsOn from './FindUsOn';

const RightNav = () => {
  return (
    <div className='space-y-5'>
       <LoginWith></LoginWith>
       <FindUsOn></FindUsOn>
    </div>
  );
};

export default RightNav;