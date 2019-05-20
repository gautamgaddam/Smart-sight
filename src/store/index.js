import { createStore, applyMiddleware } from 'redux';
import rootReducers from './configureStore';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const loggermiddleware = createLogger();

const store = createStore(
    rootReducers,
    applyMiddleware(
        thunk,
        loggermiddleware
    )
);

export default store;   