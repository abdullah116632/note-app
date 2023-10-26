import MainNav from "./pages/MainNav";
import MainPost from "./pages/MainPost";
import Model from "./pages/Model";
import { useState } from "react";

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  
    const [posts, setposts] = useState([])

  function openModel() {
    setIsModelOpen(true);
  }

  function closeModel() {
    setIsModelOpen(false);
  }

  function onSubmitPost(postData){
    setposts((prepost) => [postData, ...prepost])
  }


  return (
    <>
      <MainNav openModel={openModel} />
      {isModelOpen && <Model closeModel={closeModel} onSubmitPost={onSubmitPost}/>}
      <MainPost posts={posts}/>
    </>
  );
}

export default App;
