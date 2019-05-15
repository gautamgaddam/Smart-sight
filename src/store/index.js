import { createStore, applyMiddleware } from 'redux';
import rootReducers from './configureStore';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggermiddleware = createLogger();

const store = createStore(
    rootReducers,
    applyMiddleware(
        thunkMiddleware,
        loggermiddleware
    )
);

export default store;   