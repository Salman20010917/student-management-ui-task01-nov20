import React from "react";
import { Student } from "../types/student";

interface Props {
  students: Student[];
  onDelete: (id: number) => void;
}

const StudentTable: React.FC<Props> = ({ students, onDelete }) => {
  return (
    <table border={3} cellPadding={10} style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Level</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.level}</td>

            <td>
              <button
                onClick={() => onDelete(s.id)}
                style={{
                  background: "red",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
