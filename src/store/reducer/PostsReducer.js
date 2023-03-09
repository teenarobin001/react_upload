import { confirmedDeletePostAction, CONFIRMED_CREATE_POSTS, CONFIRMED_DELETE_POSTSACTION, CONFIRMED_GET_POSTS, CONFIRMED_UPDATE_POSTSACTION, CREATE_POST_ACTION, DELETE_POST_ACTION } from "../actions/PostTypes";

const initialState = {
    posts: [
        // {id:1, title:'Post Title 1', description: 'Same Description 1'},
        // {id:2, title:'Post Title 2', description: 'Same Description 2'},
        // {id:3, title:'Post Title 3', description: 'Same Description 3'},
        // {id:4, title:'Post Title 4', description: 'Same Description 4'}
    ],
    completed: false
}

export  default function PostsReducer(state  = initialState, actions) {
    if(actions.type === CREATE_POST_ACTION) {
        const post = {
id: Math.random(),
title:'Post Title onCreate',
description: 'Sample Description onCreate'
        }

        const posts = [...state.posts];
        posts.push(post);
        return {
            ...state,
            posts
        }
    }
     
    if(actions.type === CONFIRMED_GET_POSTS) {
        return {
            ...state,
            posts:actions.payload
        }
    }
    if(actions.type === CONFIRMED_CREATE_POSTS) {
       const posts = [...state.posts];
       posts.push(actions.payload);
       return {
        ...state,
        posts
       }
    }

    if(actions.type ===   CONFIRMED_UPDATE_POSTSACTION) {
         
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.id === actions.payload.id
           ); 
            posts[postIndex] = actions.payload;
            return {
                ...state,
                posts
            }
           
    }

    if(actions.type === CONFIRMED_DELETE_POSTSACTION) {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.id === actions.payload
           ); 

           posts.splice(postIndex,1);
           return {
            ...state,
            posts
           }

    }

    return state;
}