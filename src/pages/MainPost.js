import React from 'react';
import Post from '../components/Post';
import classes from "./MainPost.module.css"


const MainPost = ({posts}) => {
    
  return (
    <div className={classes.container}>
      {
        posts.map((post) => <Post key={post.postTitle} post={post}/>)
      }
    </div>
  );
}

export default MainPost;
