import React, { useState, useEffect } from 'react';
import { adminData } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import AdminTable from './AdminTable';

const Admin = () => {
  const [input, setInput] = useState('');
  const admin_Data = useSelector((state) => state.data.admin);
  // console.log('this', admin_Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminData(input));
  }, [dispatch, input]);
  const handleOnChange = (e) => setInput(e.target.value);
  return (
    <>
      <div className="container my-3 text-center">
        {!!admin_Data ? (
          <div
            className={`alert alert-${
              !!Object.keys(admin_Data).includes('error') ? 'danger' : 'success'
            } alert-dismissible fade show`}
            role="alert"
          >
            <strong>
              {`${
                !!Object.keys(admin_Data).includes('error')
                  ? Object.values(admin_Data)[0].charAt(0).toUpperCase() +
                    Object.values(admin_Data)[0].slice(1) +
                    ' !'
                  : 'Congratulations!'
              }`}
            </strong>
            {/* {console.log('c1', admin_Data)} */}
            {/* {console.log('c2', Object.keys(admin_Data).includes('error'))} */}
            {/* {console.log('c3', Object.values(admin_Data)[0])} */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : null}
        <h3 className="my-3">ADMIN</h3>
        <form className="d-flex my-4">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Enter the keyword to search "
            aria-label="Search"
            id="myInput"
            onChange={handleOnChange}
          />
        </form>
        <Loading jsonObj={admin_Data}>
          <AdminTable />
        </Loading>
      </div>
    </>
  );
};
export default Admin;
