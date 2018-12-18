import axios from 'axios';
//Types
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
//Action creators
export const onSaveComment = (comment) => ({type: SAVE_COMMENT, payload: comment});
export const onFetchComments = () => {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
};
//Reducer
export const comments = (state = [], action) => {
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map( comment => comment.name );
            return [...state, ...comments]
        default:
            return state;
    }
};