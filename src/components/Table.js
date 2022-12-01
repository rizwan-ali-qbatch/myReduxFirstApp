import React from 'react';
import Row from './Row';

export default function Table({ jsonObj }) {
  return (
    <div className="container my-5 table-responsive">
      <table className="text-center table table-light table-sm table-bordered border-light table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          <Row jsonObj={jsonObj} />
        </tbody>
      </table>
    </div>
  );
}
