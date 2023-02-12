import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {FaUserGraduate} from 'react-icons/fa'
export default function Commontable() {
  const [users, setusers] = useState([]);
 
  useEffect(() => {
    const fetchD = async () => {
      const res = await axios.get("http://localhost:8000/alldata");
      setusers(res.data);
    };
    fetchD();
  });

  return (
    <>
      <div className="container mt-5">
        <Table style={{fontFamily: "cursive"}}>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Email </th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <>
                  <tr className=" px-4">
                    <td>{idx+1}</td>
                    <td><FaUserGraduate className="fw-bold rounded  fs-4"   /> &nbsp; {user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.dateOfBirth}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
