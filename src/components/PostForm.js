import React from "react";
import classes from "./PostForm.module.css"
import { useState } from "react";


const PostForm = ({closeModel, onSubmitPost}) => {
  const [postTitle, setpostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    

    function handlePostTitle (event) {
      setpostTitle(event.target.value)
  }

  function handlePostBody (event) {
      setPostBody(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const post = {
      postTitle,
      postBody
    }

    
    onSubmitPost(post)
    closeModel()
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className={classes.titleBox}>
            <label htmlFor="postTitle" className={classes.label1}>Note Title</label>
            <textarea id="postTitle" className={classes.postTitle} onChange={handlePostTitle}/>
          </div>
          <div className={classes.dscBox}>
            <label htmlFor="postDsc" className={classes.label2}>Note Description</label>
            <textarea id="postDsc"className={classes.dscTitle} onChange={handlePostBody}/>
          </div>
        </div>
        <div>
          <div className={classes.btnBox}>
            <button type="button" className={classes.cancle} onClick={closeModel}>Cancle</button>
            <button type="submit" className={classes.submit}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
