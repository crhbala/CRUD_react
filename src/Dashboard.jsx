import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";

function Dashboard() {

  const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        let res = await axios.get(`https://crud-drba.onrender.com/user`);
        if (res.status === 200) {
          setData(res.data.users);
          toast.success(error.res.message);
        } else {
          toast.error(error.res.message);
        }
      } catch (error) {
        toast.error(error.res.data.message);
      }
    };
  
  

  useEffect(() => {
           adminUserFltr(data);
      normalUserFltr(data);
    }, []);

  const adminUserFltr = (data) => {
    return data.filter((note) => note.userType === "Admin");
  };
   const normalUserFltr = (data) => {
     return data.filter((note) => note.userType === "Normal");
   };

  const normalUser = adminUserFltr(data);
  const adminUser = normalUserFltr(data);

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Admin Users</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>User Type</th>
                </tr>
              </thead>
              <tbody>
                {normalUser.map((data,i) => (
                  <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.gender}</td>
                    <td>{data.userType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Normal Users</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>User Type</th>
                </tr>
              </thead>
              <tbody>
                {adminUser.map((data, i) => (
                  <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.gender}</td>
                    <td>{data.userType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;