/*eslint-disable no-alert, no-console */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducers from 'reducers';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

export default ({ children, initialState = {} }) => {
    const initStore = createStore(
        rootReducers,
        initialState,
        applyMiddleware(async,stateValidator)
    )

    return(
        <Provider store={initStore}>
            {children}
        </Provider> 
    );
};