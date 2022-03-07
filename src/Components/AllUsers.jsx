import { Checkbox, Table } from "@mantine/core";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    setUsers(querySnapshot.docs);
  };
  

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="p-8">
      <span className="text-[1.1rem] text-white">Total : {users.length}</span>


      <Table striped highlightOnHover horizontalSpacing={10} className=" !w-screen 	" >
        <thead>
          <tr>
            <th  >Roll Number</th>
            <th>Name</th>
            <th>Email / Mobile </th>
            <th>Department</th>
            <th  >What fascinates u about programming ?</th>
            <th  >Any programming experience?</th>


          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            user = user.data();
            return (
              <tr key={user.email}>
                <td>
                  <Checkbox label={user.roll} />
                </td>
                <td>{user.name}</td>
                <td>{user.email} --- {user.phone}</td>
                
                <td>{user.branch}, {user.section}, {user.year} year</td>
                <td><p  >{user.q1}</p></td>
                <td  ><p  >{user.q2}</p></td>

              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
