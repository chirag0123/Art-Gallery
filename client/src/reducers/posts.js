import {FETCH_ALL,UPDATE,DELETE,CREATE} from '../constants/actionTypes';
export default (posts=[],action)=>{
    switch(action.type){
        case DELETE:
           return  posts.filter((post)=>post._id !== action.payload); 
        case UPDATE:
              const updatedPost=posts.map((post)=>post._id===action.payload._id ? action.payload:post);
            return updatedPost;
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        default:
            return posts;
    }
}