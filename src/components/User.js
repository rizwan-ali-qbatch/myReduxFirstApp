import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './UserTable';
import Loading from './Loading';
import { useEffect } from 'react';
import { userData } from '../actions';

export default function User() {
  const params = useParams();
  const dispatch = useDispatch();

  const tableUserData = useSelector((state) => state.data.user);
  useEffect(() => {
    dispatch(userData(params.userId));
  }, [dispatch, params.userId]);

  return (
    <>
      <Loading jsonObj={tableUserData}>
        <UserTable />
      </Loading>
    </>
  );
}
