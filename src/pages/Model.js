import React from "react";
import PostForm from "../components/PostForm";
import classes from "./Model.module.css";

const Model = ({closeModel, onSubmitPost}) => {
  return (
    <>
      <dialog open className={classes.dialog}>
        <PostForm closeModel={closeModel} onSubmitPost={onSubmitPost} />
      </dialog>
    </>
  );
};

export default Model;
