import {
    comments, 
    onSaveComment,
    SAVE_COMMENT
} from 'reducers/comments';

/* Test Actions START */
describe('save comment actions', () => {
    it('has the correct type', () => {
        const action = onSaveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has correct comment payload', () => {
        const action = onSaveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
});
/* Test Actions END */

/* Test Reducers START */
it('handles actions of SAVE_COMMENT to state', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'A new comment'
    };
    const newState = comments([], action);
    expect(newState).toEqual(['A new comment']); 
});

it('handles action with unknown type', () => {
    const newState = comments([], {type: 'dasdasd'});
    expect(newState).toEqual([]); 
})
/* Test Reducers END */