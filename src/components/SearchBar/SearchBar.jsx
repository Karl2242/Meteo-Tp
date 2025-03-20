import React, { useState } from "react";
import "./SearchBar.css"; 

function SearchBar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Entrez une ville..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleSearch} 
      />
    </div>
  );
}

export default SearchBar;
