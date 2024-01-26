import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Users({ data }) {

  
  
  return (
    <div className="card shadow mb-4">
      <div>
        <div className="card-header py-3">
          <h2 className="m-0 font-weight-bold text-primary">Users</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">User Type</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data) => (
                  <tr key={data.id}>
                    <td scope="row">{data._id}</td>
                    <td>{data.name}</td>
                    <td>{data.gender}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
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

export default Users;