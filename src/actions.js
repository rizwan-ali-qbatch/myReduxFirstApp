// const url = 'https://jsonplaceholder.typicode.com/posts';
const url = 'https://partner-list.qbatch.io/backend/api/v1/users';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzZjFlYjA0YS03YTQxLTQyNjgtYjJkOS04MjI5MzIzOTE1NzEiLCJpc19hZG1pbiI6dHJ1ZSwic3ViIjoiMTg2Iiwic2NwIjoiYXBpX3YxX3VzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY3MDM5NDU1MywiZXhwIjoxNjcxNjkwNTUzfQ.q5Nn24szsl7H3W7TLhiN9-VtaQGjHx3I8M7Tjo9bWY4';

export const adminData = (input) => {
  return async (dispatch) => {
    const data = await fetch(url + `?search=${input}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        type: 'http',
        scheme: 'bearer',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => error);
    // console.log('t', data);
    dispatch({
      type: 'ADMIN_DATA',
      payload: data,
    });
  };
};

export const emptyData = (empty) => {
  return {
    type: 'EMPTY_DATA',
    payload: empty,
  };
};

export const emptyEcomData = (empty) => {
  return {
    type: 'EMPTY_ECOM_DATA',
    payload: empty,
  };
};

export const addData = () => {
  return async (dispatch) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .catch((error) => error);
    // let data = await response.json();
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

// const url2 = 'https://tassaduq:password1@app.ecomcircles.com/api/server_logs';
const url2 = 'https://app.ecomcircles.com/api/server_logs';
const cred = btoa('m.ibrahim@qbatch.com:c\\5-E7JP!e*Qgjf@');
console.log('cred:', cred);

export const ecomData = () => {
  return async (dispatch) => {
    const data = await fetch(url2, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${cred}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => error);
    // console.log('t', data['files_names']);
    dispatch({
      type: 'ECOM_DATA',
      payload: data.files_names,
    });
  };
};
