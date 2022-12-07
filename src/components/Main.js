import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, filterData } from '../actions';
import Table from './Table';
import Loading from './Loading';

const Main = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.data.posts);
  useEffect(() => {
    dispatch(addData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterData(input));
  }, [dispatch, input]);

  const handleOnChange = (event) => setInput(event.target.value);

  return (
    <>
      <div className="container my-3 text-center">
        {tableData !== null ? (
          <div
            className={`alert alert-${
              tableData === undefined ? 'danger' : 'success'
            } alert-dismissible fade show`}
            role="alert"
          >
            <strong>
              {`${
                tableData === undefined
                  ? 'Error No Data Found!'
                  : 'Congratulations!'
              }`}
            </strong>
            {/* {console.log('c1', tableData)} */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : null}
        <h3 className="text-center my-2">POSTS</h3>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Enter the keyword to search "
            aria-label="Search"
            id="myInput"
            onChange={handleOnChange}
          />
        </form>
        <Loading jsonObj={tableData}>
          <Table />
        </Loading>
      </div>
    </>
  );
};
export default Main;
