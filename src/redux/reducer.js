
import COMMENTS  from '../Data/comments';
import { combineReducers } from 'redux';
import * as actionType from './actionType';
const dishReducer = (dishState ={ isLoading:false,dishes:[] },action) => {
    switch(action.type)
    {
        case actionType.DISHES_LOADING:
            return {
                ...dishState,
                isLoading:true,
                dishes:[]
            }
        case actionType.LOAD_DISHES:
            return{
                ...dishState,
                isLoading:false,
                dishes : action.payload
            }

        default:
            return dishState;
    }
}

const commentReducer = (commentState =COMMENTS,action) =>{
    switch(action.type){
        case actionType.ADD_COMMENT:
            let comment =action.payload;
            comment.id = commentState.length;
            comment.date =new Date().toDateString();
            return commentState.concat(comment);

        default:
            return commentState;
    }
}


export const Reducer =combineReducers({
   dishes: dishReducer,
   comments:commentReducer
})