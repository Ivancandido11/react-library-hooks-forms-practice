import React from "react"

const Filter = ({ onGenreChange, onTextMatchChange, textMatch, selectedGenre }) => (
  <div className="Filter">
    <input
        name="search"
        onChange={onTextMatchChange}
        placeholder="Search by title or author..."
        type="text"
        value={textMatch}
    />
    <select
        name="filter"
        onChange={onGenreChange}
        value={selectedGenre}
    >
      <option value="All">Filter by genre</option>
      <option value="Business">Business</option>
      <option value="Fiction">Fiction</option>
      <option value="History">History</option>
      <option value="Nonfiction">Nonfiction</option>
    </select>
  </div>
)

export default Filter