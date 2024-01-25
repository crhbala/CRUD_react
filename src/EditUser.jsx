import React, { useState } from "react";
import EditModule from "./EditModule";

function EditUser({ data }) {
  const [selectOption, setSelectOption] = useState("select an ID");
  const selectHandler = (event) => {
    // console.log(event.target.value);
    setSelectOption(event.target.value);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light w-auto">
      <h3>Edit User</h3>

      <label className="w-75 min-vh-20 rounded bg-white border shadow p-4">
        Select the User ID to Delete User: &nbsp;&nbsp;
        <select onChange={selectHandler} value={selectOption}>
          <option disabled>{"select an ID"}</option>
          {data.map((data) => (
            <option key={data.id} value={data.id}>
              Name: {data.name} ({data.userType})
            </option>
          ))}
        </select>
      </label>
      <div className="w-100 min-vh-80">
        {selectOption != "select an ID" && (
          <EditModule selectOption={selectOption} />
        )}
      </div>
    </div>
  );
}

export default EditUser;
