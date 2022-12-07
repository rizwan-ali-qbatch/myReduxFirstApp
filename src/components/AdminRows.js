import React from 'react';
import { useSelector } from 'react-redux';

export default function AdminRows() {
  const rowsData = useSelector((state) => state.data.admin);
  const newArr = Object.values(rowsData);
  // console.log('newArr', newArr);

  if (typeof newArr[0] === 'object') {
    return newArr[0].map((value, index) => {
      return (
        <tr key={`row_no_${index}__`}>
          {Object.values(value).map((x, i) => {
            return <td key={i}>{x}</td>;
          })}
        </tr>
      );
    });
  } else {
    return null;
  }
}
