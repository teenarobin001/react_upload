import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../store/actions/PostActions";

import {  useNavigate } from "react-router-dom";

const CreatePost = (props) => {

    const [title,setTitle] = useState('');
    const [description, setDescription]= useState('');   
     
    const navigate = useNavigate();
 

    const dispatch = useDispatch();
    const onCreatePost = (e) => {
        e.preventDefault();
        const postsData = {
            
            title,
            description
        } 
        dispatch(createPostAction(postsData, navigate));
   
    }

  return (
    <div>
      Create Post
      <div className="w-2/4 mt-2">
        <form onSubmit={onCreatePost} >
          <div>
            <label>Title</label>
            <div>
              <input
                type="text"
                className="border border-gray-500 w-full px-1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="my-2">
            <label>Description</label>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-500 w-full px-1 h-28"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="px-2 py-1 bg-red-500 text-white">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
