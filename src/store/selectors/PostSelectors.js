import { createSelectorHook } from "react-redux"

export const getPostById = (state, postId) =>
 state.posts.find((post) => post.id === postId);

export const getPost =()=> createSelectorHook([getPostById], (post) => post);