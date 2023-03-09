import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
  createPostAction,
  deletePostsAction,
  getPostsAction,
  showDetails,
} from "../../store/actions/PostActions";
import EditPost from "./EditPost";
import "./Posts.css";
import SinglePost from "./SinglePost";
 
class Posts extends Component {
  constructor(){
    super() 
    this.state = {
      postItem:[],
      selectedPostId: "",
      editPost:false,
      showDetails:true
    }
  } 
  
 
  onCreatePost() {
    this.props.createPostAction();
  }

  componentDidMount() {
    if (this.props.posts && !this.props.posts.length) {
      this.props.getPostsAction();
    } 
    
  }
   

  onPostClickHandler = (id) => {
    this.setState({
      selectedPostId: id,
      editPost:false
    }); 
  };

  onEditPostClickHandler = (id) => { 
    
    this.setState({
      editPost: true,
      selectedPostId:id
    }); 
  };    
  onDeletePostClickHandler = (id) => { 
    const { history } = this.props; 
console.log(history,'jv')
    if(window.confirm('Are you sure you want to delete this post?')) {
      this.setState({
        showDetails: false, 
      });
      this.props.deletePostsAction(id,history );
     
    }
   
  }
  render() { 

    const filteredItem = this.props.posts.filter(post => {
      return post.id === this.state.selectedPostId; 
    }); 

const posts = [];
    for (let post of this.props.posts) {
      posts.push(
        <div key={post.id} className="p-3 mx-3 border-box">
          <div className="mt-3 shadow">
            <div>{post.ids}</div>
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div className="mt-2">
              <Link
                to={{ pathname: `/posts/${post.id}`
              }}
                className="text-black-500">
               <button onClick={this.onPostClickHandler.bind(this, post.id)}> View Details</button>
              </Link>


            </div>

            <div className="mt-2">
              <Link
                to={{ pathname: `/posts/edit/${post.id}`
              }}
                className="text-black-500" >
               <button onClick={this.onEditPostClickHandler.bind(this, post.id)}> Edit Details</button>
              </Link>

              
            </div>
            <div className="mt-2">
             
               <button className="text-black-500" onClick={this.onDeletePostClickHandler.bind(this, post.id)}> Delete Details</button>
              
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="mt-4">
        <div className="flex items-center justify-between my-4 m-4 px-2 py-4">
          <Link to="/create-posts" className="bg-red-300 px-3 py-2">
            Create Post
          </Link>
          
        </div>
        <div className="flex mt-5">
          <div className="flex-1  ">
            
            <div className="flex flex-wrap">{posts}</div>
          </div>
          <div className="flex-1"> 

           

          {
            
             (this.state.selectedPostId && !this.state.editPost && this.state.showDetails) &&
              <SinglePost id={this.state.selectedPostId} postItem={filteredItem}/>
          }
          {
            (this.state.selectedPostId && this.state.editPost && this.state.showDetails) &&
             <EditPost id={this.state.selectedPostId} postItem={filteredItem}/>
            
            
          }
             
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPostAction, getPostsAction, deletePostsAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
