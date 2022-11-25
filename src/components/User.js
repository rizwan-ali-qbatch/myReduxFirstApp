import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './UserTable';
import Loading from './Loading';
import { useEffect } from 'react';
import { addData, userData } from '../actions';
// import { useSelector, useDispatch } from 'react-redux';

export default function User() {
  const params = useParams();
  const dispatch = useDispatch();

  const tableUserData = useSelector((state) => state.data.users);
  // console.log('c:', tableUserData);
  useEffect(() => {
    dispatch(userData(params.userId));
  }, []);

  // const [tableUserData, setUserTableData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  //     .then((response) => response.json())
  //     .then((data) => setUserTableData(data));
  // }, []);

  return (
    <>
      <Loading jsonObj={tableUserData}>
        <UserTable jsonObj={tableUserData} />
      </Loading>
    </>
  );
}
