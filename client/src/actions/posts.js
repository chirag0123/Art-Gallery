import * as api from '../api/index';
import {FETCH_ALL,FETCH_BY_SEARCH,UPDATE,DELETE,CREATE, FETCH_POST} from '../constants/actionTypes';

export const getPost=(id)=>async(dispatch)=>{
  try{
    const {data}= await api.fetchPost(id);
    const action ={type :FETCH_POST,payload:data};
   dispatch(action);
  }
  catch(error){
    console.log(error.message);
  }    
}


export const getPosts=()=>async(dispatch)=>{
    try{
      const {data}= await api.fetchPosts();
      const action ={type :FETCH_ALL,payload:data};
     dispatch(action);
    }
    catch(error){
      console.log(error.message);
    }    
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    //dispatch({ type: START_LOADING });
     const { data } = await api.fetchPostsBySearch(searchQuery);
      
     dispatch({ type: FETCH_BY_SEARCH, payload: data.data });
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const createPost=(post,history)=>async(dispatch)=>{
  try{
    const {data} = await api.createPost(post);
    dispatch({type :CREATE ,payload:data});
    history.push(`/posts/${data._id}`);
  }
  catch(error){
     console.log(error);
  }
}

export const updatePost=(id,post,history)=>async(dispatch)=>{
  try{
     const {data}=await api.updatePost(id,post);
     dispatch({type :UPDATE ,payload:data});
     history.push(`/posts/${id}`);
  }
  catch(error){
     console.log(error.message);
  }
}

export const deletePost =(id)=>async(dispatch)=>{
  try{
    await api.deletePost(id);
    dispatch({type : DELETE ,payload :id});
  }
  catch(error){
     console.log(error);
  }
}

export const likePost=(id)=>async(dispatch)=>{
  try{
    const {data}= await api.likePost(id);
    dispatch({type:UPDATE,payload:data});
  }
  catch(error)
  {
    console.log(error);
    }
}