import React from 'react';
import NavBar from '../components/NavBar';
import PostButton from '../components/PostButton';

const MainNav = ({openModel}) => {
  return (
    <div>
      <NavBar />
      <PostButton openModel={openModel}/>
    </div>
  );
}

export default MainNav;
