import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePostAction } from "../../store/actions/PostActions";

const EditPost = (props) => {  
  const [post, setPost] = useState({
    title: props.postItem[0].title,
    description: props.postItem[0].description,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setPost(props.postItem[0]); 
  }, [props.postItem[0]]);

  const onChangeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(navigate,'jv')
    dispatch(updatePostAction(post, props.id, navigate));
  };
  return (
    <div>
      Edit Post Page
      <div>{props.id}</div>
      <form onSubmit={submitHandler}>
        <div className="my-2">
          <label>Title</label>
          <input
            name="title"
            className="border border-gray-500 w-full p-1"
            value={post.title}
            type="text"
            onChange={onChangeHandler}
          />
        </div>

        <div className="my-2">
          <label>Description</label>
          <textarea
            name="description"
            className="border border-gray-500 w-full p-1"
            value={post.description}
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit" className="bg-red-500 text-white px-3 py-2 ">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPost;
