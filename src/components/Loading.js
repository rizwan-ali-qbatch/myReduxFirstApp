import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { emptyData, emptyEcomData } from '../actions';
import { useSelector } from 'react-redux';

export default function Loading(props) {
  const ecom_Data = useSelector((state) => state.data.ecom);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyData({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(emptyEcomData(null));
  }, [dispatch]);

  const obj = props.jsonObj;

  return (
    <div>
      {!!obj ? (
        Object.keys(obj).length !== 0 ? (
          props.children
        ) : ecom_Data === undefined ? (
          'No Data Found'
        ) : (
          <p className="text-center my-5">
            <strong>Loading ...</strong>
          </p>
        )
      ) : (
        <p className="text-center my-5">
          <strong>Loading ...</strong>
        </p>
      )}
    </div>
  );
}
