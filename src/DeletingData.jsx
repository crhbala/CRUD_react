import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DeletingData({ selectOption, fetchData }) {
  const [selectedData, setSelectedData] = useState(null);

  const fetchDat = async () => {
    try {
      if (selectOption != "select an ID") {
        const response = await axios.get(
          `http://localhost:3000/data/${selectOption}`
        );
        console.log(response.data);
        if (response.data) {
          setSelectedData(response.data);
        }
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  // console.log(selectedData);

  useEffect(() => {
    fetchDat();
  }, [selectOption]);

  const updateData = (event) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3000/data/${selectedData.id}`)
      .then((response) => {
        console.log(response);
        console.log("data deleted successfully");
      })
      .catch((err) => {
        console.log("error deleting data", err);
      });
    fetchData();
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-ligt">
      <div className="w-50 board bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Delete User</h1>

        {!selectedData ? (
          <p>Loading Data...</p>
        ) : (
          <form onSubmit={updateData}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                // placeholder={selectedData.name}
                value={selectedData.name}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={selectedData.email}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name">Phone:</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                value={selectedData.phone}
              />
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <div>
                <label className="mb-2">
                  Is Active User: &nbsp;&nbsp;
                  <select
                    className="form-control"
                    value={selectedData.important}
                  >
                    <option>---select---</option>
                    <option>true</option>
                    <option>false</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="mb-2">
                  Gender: &nbsp;&nbsp;
                  <select className="form-control" value={selectedData.gender}>
                    <option>---select---</option>
                    <option>male</option>
                    <option>female</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="mb-2">
                  User Type: &nbsp;&nbsp;
                  <select
                    className="form-control"
                    value={selectedData.userType}
                  >
                    <option>---select---</option>
                    <option>Admin</option>
                    <option>Normal</option>
                  </select>
                </label>
              </div>
            </div>
            <button className="btn btn-danger" type="submit">
              Delete
            </button>
            <Link to="/editusers" className="btn btn-primary ms-3">
              Back
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}

export default DeletingData;
