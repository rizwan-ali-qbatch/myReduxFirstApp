import React from 'react';
import Row from './Row';

export default function Table() {
  console.log();
  return (
    <div className="container my-5 table-responsive">
      <table className="text-center table table-light table-sm table-bordered border-light table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th scope="col">UserId</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <Row />
        </tbody>
      </table>
    </div>
  );
}
