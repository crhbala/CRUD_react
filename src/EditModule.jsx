import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EditModule({ selectOption,fetchData }) {

  const navigate = useNavigate()
  const [selectedData, setSelectedData] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedGender, setEditedGender] = useState("");
  const [editedImportant, setEditedImportant] = useState("");
  const [editedUserType, setEditedUserType] = useState("");
  const [editedUserEmail, setEditedUserEmail] = useState("");
  const [editedPhoneNo, setEditedPhoneNo] = useState("");



  const fetchDat = async () => {
    try {
      if (selectOption != "select an ID") {
        const response = await axios.get(
          `http://localhost:3000/data/${selectOption}`
        );
        console.log(response.data);
        if (response.data) {
          setSelectedData(response.data);
          setEditedName(response.data.name);
          setEditedGender(response.data.gender);
          setEditedImportant(response.data.important);
          setEditedUserType(response.data.userType);
          setEditedPhoneNo(response.data.phone);
          setEditedUserEmail(response.data.email);
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

    let data = {
      id: selectedData.id,
      name: editedName,
      email: editedUserEmail,
      phone: editedPhoneNo,
      gender: editedGender,
      important: editedImportant,
      userType: editedUserType
    };

    axios
      .put(`http://localhost:3000/data/${selectedData.id}`, data)
      .then((response) => {
        console.log(response);
        console.log("data updated successfully");
        fetchData();
      })
      .catch((err) => {
        console.log("error updating data", err);
      });
            
      navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-ligt">
      <div className="w-50 board bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Edit User Details</h1>

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
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder=""
                value={editedUserEmail}
                onChange={(e) => setEditedUserEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name">Phone:</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                placeholder=""
                value={editedPhoneNo}
                onChange={(e) => setEditedPhoneNo(e.target.value)}
              />
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <div>
                <label className="mb-2">
                  Is Active User: &nbsp;&nbsp;
                  <select
                    className="form-control"
                    value={editedImportant ? "true" : "false"}
                    onChange={(e) =>
                      setEditedImportant(
                        e.target.value == "true" ? true : false
                      )
                    }
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
                  <select
                    className="form-control"
                    value={editedGender}
                    onChange={(e) => setEditedGender(e.target.value)}
                  >
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
                    value={editedUserType}
                    onChange={(e) => setEditedUserType(e.target.value)}
                  >
                    <option>---select---</option>
                    <option>Admin</option>
                    <option>Normal</option>
                  </select>
                </label>
              </div>
            </div>
            <button className="btn btn-secondary" type="submit">
              Edit
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

export default EditModule;