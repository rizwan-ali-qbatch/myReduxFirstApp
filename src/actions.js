// This is a synchronous action, hence
// // thunk will not interfere.
// export const deleteData = () => {
//   return {
//     type: 'DELETE_DATA',
//   };
// };

// import { useParams } from 'react-router-dom';

export const userData = (params) => {
  // Thunk Function
  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params}`
    );
    const data = await response.json();

    dispatch({
      type: 'USER_DATA',
      payload: data,
    });
  };
};

export const addData = () => {
  // Thunk Function
  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Dispatching the action when async
    // action has completed.
    dispatch({
      type: 'ADD_DATA',
      payload: data,
    });
  };
};
