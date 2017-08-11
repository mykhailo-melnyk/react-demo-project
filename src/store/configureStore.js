import { createStore, applyMiddleware, compose } from 'redux';
import {rootReducer} from '../reducers'
import thunk from 'redux-thunk';

const middlewares = [
    thunk
];

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

export default (initialState) => {
    const store = createStore(
        rootReducer,
        enhancer
    );
    return store;

};