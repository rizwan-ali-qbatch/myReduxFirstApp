import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ecomData } from '../actions';
import EcomTable from './EcomTable';
import Loading from './Loading';

const Ecom = () => {
  const ecom_Data = useSelector((state) => state.data.ecom);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ecomData());
  }, [dispatch]);
  return (
    <div className="container my-3 text-center">
      {ecom_Data !== null ? (
        <div
          className={`alert alert-${
            ecom_Data === undefined ? 'danger' : 'success'
          } alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {`${
              ecom_Data === undefined
                ? 'Error No Data Found!'
                : 'Congratulations!'
            }`}
          </strong>
          {/* {console.log('c1', ecom_Data)} */}
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
      <h3 className="my-3">ECOM</h3>
      <Loading jsonObj={ecom_Data === undefined ? !ecom_Data : ecom_Data}>
        <EcomTable />
      </Loading>
    </div>
  );
};

export default Ecom;
