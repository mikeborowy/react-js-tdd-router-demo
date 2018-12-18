//Types
export const CHANGE_AUTH = 'CHANGE_AUTH';
//Action
export const onChangeAuth = (isLoggedIn) => ({type: CHANGE_AUTH, isLoggedIn});
//Reducer
export const auth = (state = false, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.isLoggedIn;
        default:
            return state;
    }
};