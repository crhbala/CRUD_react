import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Note from "./Note";
import Users from "./Users";
import EditUsers from "./EditModule";
import CreateUser from "./CreateUser";
import EditModule from "./EditModule";
import Dashboard from "./Dashboard";
import DeleteUsers from "./DeleteUsers";
import EditUser from "./EditUser";
import DeletingData from "./DeletingData";

// Design an UI to implement the CRUD // CRUD - Create,Read,Update,Delete // Dashboard // List Users - /users // Create User - /create-user // Edit User - /edit-user/:id // profile - /profile/:id // edit-profile – /edit-profile/:id

function App() {
  const [data, setData] = useState([]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserGender, setNewUserGender] = useState("");
  const [newUserImportant, setNewUserImportant] = useState("");
  const [newUserType, setNewUserType] = useState("");
  const [newEmailId, setNewEmailId] = useState("");
  const [newPhoneNo, setNewPhoneNo] = useState("");

  const padding = {
    padding: 5,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data");
      setData(response.data);
    } catch (error) {
      console.log("Failed fetch data", error);
    }
  };

  return (
    <div>
      <Router>
        <div className="bg-white p-2">
          <div className=" list-group-flush container-fluid d-flex justify-content-evenly">
            <div>
              <Link to={"/"} className="btn">
                <a className="list-group-item list-group-item-action py-2">
                  <i className="bi bi-speedometer2 fs-5 me-3"></i>
                  <span>Dashboard</span>
                </a>
              </Link>
            </div>
            <div>
              <Link to={"/users"} className="btn">
                <a className="list-group-item list-group-item py-2">
                  <i className="bi bi-person-lines-fill fs-5 me-3"></i>
                  <span>Users</span>
                </a>
              </Link>
            </div>
            <div>
              <Link to={"/editusers"} className="btn">
                <a className="list-group-item list-group-item py-2">
                  <i className="bi bi-pen fs-5 me-3"></i>
                  <span>Edit Users</span>
                </a>
              </Link>
            </div>
            <div>
              <Link to={"/createuser"} className="btn">
                <a className="list-group-item list-group-item py-2">
                  <i className="bi bi-person-plus-fill fs-5 me-3"></i>
                  <span>Create User</span>
                </a>
              </Link>
            </div>
            <div>
              <Link to={"/delete/:userid"} className="btn">
                <a className="list-group-item list-group-item py-2">
                  <i className="bi bi-trash fs-5 me-3"></i>
                  <span>Delete User</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard data={data} />} />
          <Route path="/users" element={<Users data={data} />} />
          <Route path="/editusers" element={<EditUser data={data} />} />
          <Route
            path="/createuser"
            element={
              <CreateUser
                setNewUserGender={setNewUserGender}
                setNewUserImportant={setNewUserImportant}
                setNewUserName={setNewUserName}
                newUserGender={newUserGender}
                newUserName={newUserName}
                newUserImportant={newUserImportant}
                newUserType={newUserType}
                setNewUserType={setNewUserType}
                setNewEmailId={setNewEmailId}
                setNewPhoneNo={setNewPhoneNo}
                newEmailId={newEmailId}
                newPhoneNo={newPhoneNo}
                fetchData={fetchData}
              />
            }
          />
          <Route path="/delete/:userid" element={<DeleteUsers data={data} />} />
          <Route
            path="/editmodule/:userid"
            element={<EditModule fetchData={fetchData} />}
          />
          <Route path="/delete/:userid" element={<DeletingData data={data} fetchData={fetchData} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
