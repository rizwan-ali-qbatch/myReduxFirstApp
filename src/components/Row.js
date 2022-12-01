import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Row(props) {
  const rowsData = useSelector((state) =>
    !state.data.input ? state.data.posts : state.data.filterposts
  );
  return rowsData.map((value, index) => {
    return (
      <tr key={`row_no_${index}__`}>
        <td>
          <Link to={`/user/${value.userId}`}>{value.userId}</Link>
        </td>
        <td>{value.id}</td>
        <td>{value.title}</td>
        <td>{value.body}</td>
      </tr>
    );
  });
}
