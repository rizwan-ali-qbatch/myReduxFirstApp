import React from 'react';
import EcomRows from './EcomRows';

export default function EcomTable() {
  return (
    <>
      <div className="container my-2 table-responsive">
        <table className="text-center table table-light table-sm table-bordered border-light table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Files Names</th>
            </tr>
          </thead>
          <tbody>
            <EcomRows />
          </tbody>
        </table>
      </div>
    </>
  );
}
