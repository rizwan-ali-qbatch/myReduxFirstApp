export const emptyData = (empty) => {
  return {
    type: 'EMPTY_DATA',
    payload: empty,
  };
};

export const userData = (params) => {
  return async (dispatch) => {
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

export const filterData = (input) => {
  return {
    type: 'FILTER_DATA',
    payload: input,
  };
};

export const addData = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    dispatch({
      type: 'ADD_DATA',
      payload: data.concat({
        userId: 10,
        id: 101,
        body: 'mustafa',
        title: 'rizwan',
      }),
    });
  };
};
