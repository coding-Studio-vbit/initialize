import { Button, Checkbox, Table } from "@mantine/core";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import CsvDownload from "react-json-to-csv";
import { useRef } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const data = useRef([]);
  const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((d) => {
      const user = d.data();
      data.current.push({
        rollNumber: user.roll,
        name: user.name,
        year: user.year,
        department: user.branch,
        section: user.section,
        rollNumber2: user.roll2,
        name2: user.name2,
        year2: user.year2,
        department2: user.branch2,
        section2: user.section2,
        email: user.email,
        college: user.college,
        phone: user.phone,
        
      });
    });
    setUsers(querySnapshot.docs);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="p-8">
      <span className="text-[1.1rem] text-white">Total : {users.length}</span>
      <Button className="bg-purple-600 mt-[2rem] ml-8  hover:bg-purple-800 shadow-md">
        <CsvDownload data={data.current} filename={"participants.csv"} />
      </Button>

      <Table
        striped
        highlightOnHover
        horizontalSpacing={10}
        className=" !w-screen mt-4	"
      >
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Year</th>
            <th>Branch & Section</th>
            <th>Roll Number(Member 2)</th>
            <th>Name(Member 2)</th>
            <th>Year(Member 2)</th>
            <th>Branch & Section(Member 2)</th>
            <th>College</th>
            <th>Email</th>
            <th>Mobile </th>
            <th>What fascinates u about programming ?</th>
            <th>Any programming experience?</th>
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
                <td>{user.year}</td>
                <td>{user.branch}-{user.section}</td>
                <td>
                  <Checkbox label={user.roll2} />
                </td>
                <td>{user.name2}</td>
                <td>{user.year2}</td>
                <td>{user.branch2}-{user.section2}</td>
                <td>{user.college}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                {user.name2?<><td>{user.name2}-{user.roll2}</td></>:<>none</>}

                <td>
                  <p>{user.q1}</p>
                </td>
                <td>
                  <p>{user.q2}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
