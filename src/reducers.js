const { combineReducers } = require("redux");

const INITAL_STATE = {
  posts: null,
  filterposts: null,
  admin: null,
  filteradmin: null,
  input: "",
  user: {},
};

const dataReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, posts: action.payload };
    case "ADMIN_DATA":
      return { ...state, admin: action.payload };
    case "USER_DATA":
      return { ...state, user: action.payload };
    case "EMPTY_DATA":
      return { ...state, user: action.payload };
    case "FILTER_DATA":
      const filteredposts = !!state.posts
        ? state.posts.filter((x) =>
            ["title", "body"].some((col) =>
              x[col].toLowerCase().includes(action.payload.toLowerCase())
            )
          )
        : [];
      // console.log("fp", filteredposts);
      return { ...state, filterposts: filteredposts, input: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
