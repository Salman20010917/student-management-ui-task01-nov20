import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import StudentTable from "../components/StudentTable";
import CreateStudentModal from "../components/CreateStudentModal";
import { mockStudents } from "../data/students";
import { Student } from "../types/student";

const StudentsPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  // Load mock data
  useEffect(() => {
    setStudents(mockStudents);
  }, []);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Delete Student
  const handleDeleteStudent = (id: number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // Add new student
  const handleAddStudent = (newStudent: Omit<Student, "id">) => {
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    const student: Student = { id: newId, ...newStudent };
    setStudents((prev) => [...prev, student]);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Management</h1>

      <button
        onClick={() => setModalOpen(true)}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          marginBottom: "20px",
          background: "blue",
          color: "white",
          borderRadius: "5px",
        }}
      >
        + Add Student
      </button>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <StudentTable students={filteredStudents} onDelete={handleDeleteStudent} />

      <CreateStudentModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddStudent}
      />
    </div>
  );
};

export default StudentsPage;
