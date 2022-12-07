import React from 'react';
import { useSelector } from 'react-redux';

export default function EcomRows() {
  const rowsData = useSelector((state) => state.data.ecom);
  const newArr = Object.values(rowsData);
  return newArr.map((value, index) => {
    return (
      <tr key={`row_no_${index}__`}>
        <td>{index + 1}</td>
        <td>{value}</td>
      </tr>
    );
  });
}
