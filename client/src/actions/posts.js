import * as api from '../api/index';
import {FETCH_ALL,UPDATE,DELETE,CREATE} from '../constants/actionTypes';
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
    // const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    // dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const createPost=(post)=>async(dispatch)=>{
  try{
    const {data} = await api.createPost(post);
    dispatch({type :CREATE ,payload:data});
  }
  catch(error){
     console.log(error);
  }
}

export const updatePost=(id,post)=>async(dispatch)=>{
  try{
     const {data}=await api.updatePost(id,post);
     dispatch({type :UPDATE ,payload:data});
     dispatch(getPosts());
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