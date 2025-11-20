import React, { useState } from "react";
import { Student } from "../types/student";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (student: Omit<Student, "id">) => void;
}

const CreateStudentModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState<4 | 5 | 6 | 7 | undefined>(undefined);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!name || !email || !level) {
      alert("All fields are required!");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    onSubmit({ name, email, level });
    setName("");
    setEmail("");
    setLevel(undefined);
    onClose();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Add New Student</h2>

        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <label>Level</label>
        <select
          value={level}
          onChange={(e) => setLevel(Number(e.target.value) as any)}
          style={input}
        >
          <option value="">Select level</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>

        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button onClick={onClose} style={cancelBtn}>
            Cancel
          </button>
          <button onClick={handleSubmit} style={submitBtn}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const overlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal: React.CSSProperties = {
  background: "white",
  padding: "20px",
  width: "400px",
  borderRadius: "10px",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "15px",
};

const cancelBtn = {
  padding: "8px 15px",
  marginRight: "10px",
};

const submitBtn = {
  padding: "8px 15px",
  background: "blue",
  color: "white",
  borderRadius: "5px",
};

export default CreateStudentModal;
