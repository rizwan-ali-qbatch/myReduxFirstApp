// const url = "https://jsonplaceholder.typicode.com/users";
const url = "https://partner-list.qbatch.io/backend/api/v1/users";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NjI4YjQ3OC1hMTk3LTQ4MmQtYWQ0Mi04NzQ4NjUwMDEwMjMiLCJpc19hZG1pbiI6dHJ1ZSwic3ViIjoiOSIsInNjcCI6ImFwaV92MV91c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE2Njk5NzgyNDAsImV4cCI6MTY3MTI3NDI0MH0.sXTq1Y9wEP2XhOUpS1mpLO8t8ETRpF7P9Hsvn3JX904";

export const addData = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    dispatch({
      type: "ADD_DATA",
      payload: data.concat({
        userId: 10,
        id: 101,
        body: "mustafa",
        title: "rizwan",
      }),
    });
  };
};

export const adminData = () => {
  return async (dispatch) => {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .catch((e) => e);
    console.log(data);
    dispatch({
      type: "ADMIN_DATA",
      payload: data,
    });
    // return data;
  };
};

export const emptyData = (empty) => {
  return {
    type: "EMPTY_DATA",
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
      type: "USER_DATA",
      payload: data,
    });
  };
};

export const filterData = (input) => {
  return {
    type: "FILTER_DATA",
    payload: input,
  };
};
