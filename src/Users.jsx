import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Users({ data }) {

  
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light w-auto">
      <h2>Users</h2>

      <div className="w-75 rounded bg-white border shadow p-4">
        <table className="table caption-top bg-white rounded mt-2">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Type</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id}>
                <td scope="row">{data.id}</td>
                <td>{data.name}</td>
                <td>{data.userType}</td>
                <td>Phone</td>
                <td>{data.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;