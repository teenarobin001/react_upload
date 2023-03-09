import React from 'react'   
import { connect } from 'react-redux' 
import { getPost } from '../../store/selectors/PostSelectors'
const SinglePost = (props) => { 
    console.log(props.postItem)
  return (
    <div>
      Single Post Page  
       <div>{props.id}</div> 
       <div>{props.postItem[0].title}</div> 
       <div>{props.postItem[0].description}</div> 
    </div>
  )
}

  

export default (SinglePost)
 