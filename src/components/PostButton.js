import React from "react";
import classes from "./PostButton.module.css";

const PostButton = ({openModel}) => {
  return (
    <>
      <div className={classes.container}>
        <button type="button" className={classes.btn} onClick={openModel}>Create Post</button>
      </div>
      <div className={classes.rulerContainer}>
        <div className={classes.ruler}></div>
      </div>
    </>
  );
};

export default PostButton;
