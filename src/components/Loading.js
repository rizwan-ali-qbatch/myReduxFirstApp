import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { emptyData } from '../actions';

export default function Loading(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyData({}));
  }, []);

  const obj = props.jsonObj;

  return (
    <div>
      {obj ? (
        Object.keys(obj).length !== 0 ? (
          props.children
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
