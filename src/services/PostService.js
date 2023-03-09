import axiosInstance from "./AxiosInstance";

export function getPosts() {
    return axiosInstance.get(`posts.json`,)
}

export function createPost(postData) {
    return axiosInstance.post(`posts.json`,postData)
}

export function formatPosts(postData) {
    let posts = [];
        for(let key in postData) {
            posts.push({...postData[key], id:key})
        }
        return posts;
}

export function updatePost(postData,id) {
    return axiosInstance.put(`posts/${id}.json`, postData)
}

export function deletePost(id,token) {
    return axiosInstance.delete(`posts/${id}.json`)
}