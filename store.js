import { createStore, combineReducers,applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {postReducer, inputReducer} from './reducers/postReducer';

const rootReducer = combineReducers({
    posts: postReducer,
    inputs: inputReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;