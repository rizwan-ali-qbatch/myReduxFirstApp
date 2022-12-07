const { combineReducers } = require('redux');

const INITAL_STATE = {
  posts: null,
  filterposts: null,
  admin: null,
  ecom: null,
  input: '',
  user: {},
};

const dataReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return { ...state, posts: action.payload };
    case 'ADMIN_DATA':
      return { ...state, admin: action.payload };
    case 'ECOM_DATA':
      return { ...state, ecom: action.payload };
    case 'USER_DATA':
      return { ...state, user: action.payload };
    case 'EMPTY_DATA':
      return { ...state, user: action.payload };
    case 'EMPTY_ECOM_DATA':
      return { ...state, ecom: action.payload };
    case 'FILTER_DATA':
      const filteredposts = !!state.posts
        ? state.posts.filter((x) =>
            ['title', 'body'].some((col) =>
              x[col].toLowerCase().includes(action.payload.toLowerCase())
            )
          )
        : [];
      return { ...state, filterposts: filteredposts, input: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
