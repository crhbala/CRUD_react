import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CreateUser({
  setNewUserName,
  setNewUserGender,
  setNewUserImportant,
  newUserName,
  newUserGender,
  newUserImportant,
  newUserType,
  setNewUserType,
  setNewEmailId,
  newEmailId,
  setNewPhoneNo,
  newPhoneNo,
  fetchData
}) {
  const navigate = useNavigate();

  const newUserNameRef = useRef(null);

  useEffect(() => {
    newUserNameRef.current.focus();
  }, []);
  const addUser = (event) => {
    event.preventDefault();

    //create a user data
    let dataObject = {
      name: newUserName,
      gender: newUserGender,
      important: newUserImportant === "true",
      userType: newUserType,
      email: newEmailId,
      phone:newPhoneNo
    };
    axios
      .post("https://crud-drba.onrender.com/user", dataObject)
      .then((response) => {
        console.log("note added successfully....");
      })
      .catch((err) => console.log(err));
    // setData(data.concat(dataObject));
 
    //clear the input
    setNewUserName("");
    setNewUserGender("");
    setNewUserImportant("");
    setNewEmailId("");
    setNewPhoneNo("");
    setNewUserType("");
    // navigate("/users");
    fetchData();
       navigate("/");
  };

  return (
    <div className="responsive d-flex w-100 vh-100 justify-content-center align-items-center bg-ligt">
      <div className="w-auto board bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <div className="form-responsive">
          <form onSubmit={addUser}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your Name"
                onChange={(e) => setNewUserName(e.target.value)}
                value={newUserName}
                ref={newUserNameRef}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your Email"
                onChange={(e) => setNewEmailId(e.target.value)}
                value={newEmailId}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name">Phone:</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                placeholder="Enter your Phone Number"
                onChange={(e) => setNewPhoneNo(e.target.value)}
                value={newPhoneNo}
                required
              />
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="m-2">
                <label className="mb-2">
                  Is Active User: &nbsp;&nbsp;
                  <select
                    className="form-control"
                    onChange={(e) => setNewUserImportant(e.target.value)}
                    value={newUserImportant}
                    required
                  >
                    <option>---select---</option>
                    <option>true</option>
                    <option>false</option>
                  </select>
                </label>
              </div>
              <div className="m-2">
                <label className="mb-2">
                  Gender: &nbsp;&nbsp;
                  <select
                    className="form-control"
                    onChange={(e) => setNewUserGender(e.target.value)}
                    value={newUserGender}
                    required
                  >
                    <option>---select---</option>
                    <option>male</option>
                    <option>female</option>
                  </select>
                </label>
              </div>
              <div className="m-2">
                <label className="mb-2">
                  User Type: &nbsp;&nbsp;
                  <select
                    className="form-control"
                    onChange={(e) => setNewUserType(e.target.value)}
                    value={newUserType}
                    required
                  >
                    <option>---select---</option>
                    <option>Admin</option>
                    <option>Normal</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <button className="btn btn-success" type="submit">
                Submit
              </button>
              <Link to="/" className="btn btn-primary m-3 ">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;