import React from 'react';
// import Table from './Table';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { addData } from '../actions';
// import { user } from '../store';

export default function Loading(props) {
  // const data = useSelector((state) => state.data.posts);
  // const usersData = useSelector((state) => state.data.users);
  // console.log('P:', props.jsonObj);
  return (
    <div>
      {props.jsonObj?.length ? (
        props.children
      ) : (
        <p className="text-center my-5">
          <strong>Loading ...</strong>
        </p>
      )}
    </div>
  );
}
