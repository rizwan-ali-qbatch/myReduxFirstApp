import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './actions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User';
import Main from './components/Main';

const App = () => {
  // const dispatch = useDispatch();
  // // Selects the state value from the store.
  // const tableData = useSelector((state) => state.data.todo);
  // // const handleAddData = () => dispatch(addData());
  // useEffect(() => {
  //   dispatch(addData());
  // }, []);
  // // const handleDeleteData = () => dispatch(deleteData());
  return (
    <>
      {/* <button onClick={handleAddData}>Add Data</button> */}
      {/* <button onClick={handleDeleteData}>Delete Data</button> */}

      {/* {tableData && <div>{JSON.stringify(tableData)}</div>} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
