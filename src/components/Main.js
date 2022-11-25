import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, filterData } from '../actions';
import Table from './Table';
import Loading from './Loading';

const Main = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  //Selects the state value from the store.
  const tableData = useSelector((state) => state.data.posts);
  //const handleAddData = () => dispatch(addData());
  useEffect(() => {
    dispatch(addData());
  }, []);

  //const handleDeleteData = () => dispatch(deleteData());

  // const [tableData, setTableData] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setTableData(
  //         data.concat({ userId: 10, id: 101, body: 'mustafa', title: 'rizwan' })
  //       )
  //     );
  // }, []);

  // const filteredInfo = tableData.filter((x) =>
  //   ['title', 'body'].some((col) =>
  //     x[col].toLowerCase().includes(input.toLowerCase())
  //   )
  // );

  console.log(tableData);
  // console.log(filteredInfo);

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="container my-5">
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
      </div>
      {/* {tableData && (
        <div className="container">{JSON.stringify(tableData)}</div>
      )} */}
      <Loading jsonObj={tableData}>
        <Table jsonObj={tableData} />
      </Loading>
    </>
  );
};
export default Main;
