import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, UPDATE_INPUT1, UPDATE_INPUT2 } from '../actions/postActions';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  input1: '',
  input2: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT1:
      return {
        ...state,
        input1: action.payload,
      };
    case UPDATE_INPUT2:
      return {
        ...state,
        input2: action.payload,
      };
    default:
      return state;
  }
};