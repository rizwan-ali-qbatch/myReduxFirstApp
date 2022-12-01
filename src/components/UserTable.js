import React from 'react';
import { useSelector } from 'react-redux';

export default function UserTable() {
  const tableUserData = useSelector((state) => state.data.user);
  console.log('UT:', tableUserData);
  return (
    <div className="container my-5 table-responsive">
      <table className="text-center table table-light table-sm table-bordered border-light table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th scope="col">KEY</th>
            <th scope="col">VALUE</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tableUserData).map((key, index) => (
            <tr key={`row_id_${index}__`}>
              <td>{key[0].toUpperCase() + key.slice(1)}</td>
              {typeof tableUserData[key] === 'object' ? (
                <td>
                  {Object.values(tableUserData[key])
                    .map((val) =>
                      typeof val === 'object'
                        ? Object.values(val).join(', ')
                        : val
                    )
                    .join(', ')}
                </td>
              ) : (
                <td>{tableUserData[key]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
