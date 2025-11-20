import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        marginBottom: "20px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default SearchBar;
