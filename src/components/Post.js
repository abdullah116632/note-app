import React from "react";
import classes from "./Post.module.css"

const Post = ({post}) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h4>{post.postTitle}</h4>
      </div>
      <div className={classes.post}>
        <p>
         {post.postBody}
        </p>
      </div>
    </div>
  );
};

export default Post;
