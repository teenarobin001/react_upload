 
import { createPost, deletePost,  formatPosts, getPosts, updatePost } from "../../services/PostService";
import { CONFIRMED_CREATE_POSTS, CONFIRMED_DELETE_POSTSACTION, CONFIRMED_GET_POSTS, CONFIRMED_UPDATE_POSTSACTION } from "./PostTypes";




export function createPostAction(postData, navigate) {
     
    return (dispatch,getState) => {  
      const state = getState();
      const token = state.auth.auth.idToken; 
        createPost(postData).then(response => {
            console.log(response.data); 

            const singlePost = {
              ...postData,
              id:response.data.name
            }
            dispatch(confirmedCreatePostAction(singlePost));
            navigate('/posts');
        })
    }
}

export function updatePostAction(postsData,id,navigate) {  
  return (dispatch,getState) => {
    
    const state = getState();
    const token = state.auth.auth.idToken; 
    updatePost(postsData, id).then(response => {  
      dispatch(confirmedUpdatePostAction(postsData,id)); 
      navigate('/posts');  

    });
  }
}

export function deletePostsAction(id,history) { 
  return (dispatch,getState) => {
    
    const state = getState();
    const token = state.auth.auth.idToken; 
    deletePost(id).then(response => {
      dispatch(confirmedDeletePostAction(id)) ;  
      window.location.href='/posts'
       })
  }
}

export function confirmedDeletePostAction(id){
  return{
    type: CONFIRMED_DELETE_POSTSACTION,
    payload:id 
  }
}

export function confirmedUpdatePostAction(postData,id){
  return{
    type: CONFIRMED_UPDATE_POSTSACTION,
    payload:postData 
  }
}



export function getPostsAction() {
  return (dispatch, getState) => {
    const state = getState();
    const token = state.auth.auth.idToken; 
    getPosts().then((response) => { 
      let posts = formatPosts(response.data);
      dispatch(confirmedGetPostsAction(posts));
      
    });
  };
}

export function confirmedCreatePostAction(singlePost) { 
  return {
    type:CONFIRMED_CREATE_POSTS,
    payload:singlePost
  }
}

export function confirmedGetPostsAction(posts) {
  return {
    type: CONFIRMED_GET_POSTS,
    payload: posts,
  };
} 

 