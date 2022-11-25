const { combineReducers } = require('redux');

const INITAL_STATE = {
  posts: null,
  users: [],
  user: {},
};

const dataReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return { ...state, posts: action.payload };
    case 'USER_DATA':
      return { ...state, users: action.payload };
    case 'USER_DATA_LOADED':
      return { ...state, user: action.payload };
    // case 'FILTER_DATA':
    //   return { ...state, users: action.payload };
    // case 'DELETE_DATA':
    //   return INITAL_STATE;
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
