import React, { useEffect } from "react";
import { adminData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
// import React, { useState, useEffect } from "react";
// import { addData, filterData } from "../actions";
// import Table from "./Table";
// import Loading from "./Loading";

const Admin = () => {
  const admin_Data = useSelector((state) => state.data.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminData());
  }, [dispatch]);
  return (
    <>
      <div className="container my-5 text-center">
        <h3>Admin</h3>
        <p>{JSON.stringify(admin_Data)}</p>
      </div>
    </>
  );
  // const [input, setInput] = useState("");
  // const dispatch = useDispatch();
  // const tableData = useSelector((state) => state.data.posts);
  // useEffect(() => {
  //   dispatch(addData());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(filterData(input));
  // }, [dispatch, input]);
  // const filteredInfo = useSelector((state) => state.data.filterposts);
  // const handleOnChange = (event) => setInput(event.target.value);
  // // console.log("fi", filteredInfo);
  // return (
  //   <>
  //     <div className="container my-5">
  //       <form className="d-flex">
  //         <input
  //           className="form-control me-2"
  //           type="text"
  //           placeholder="Enter the keyword to search "
  //           aria-label="Search"
  //           id="myInput"
  //           onChange={handleOnChange}
  //         />
  //       </form>
  //     </div>
  //     <Loading jsonObj={tableData}>
  //       <Table jsonObj={filteredInfo} />
  //     </Loading>
  //   </>
  // );
};
export default Admin;
