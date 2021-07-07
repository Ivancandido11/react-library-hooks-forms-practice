import React from "react"

const Filter = ({ onGenreChange, onTextMatchChange }) => {
  // TODO: use onGenreChange and onTextMatchChange to
  // control the <input /> and <select /> elements by adding
  // them as onChange callback functions.

  return (
    <div className="Filter">
      <input
          name="search"
          placeholder="Search by title or author..."
          type="text"
      />
      <select name="filter">
        <option value="All">Filter by genre</option>
        <option value="Business">Business</option>
        <option value="Fiction">Fiction</option>
        <option value="History">History</option>
        <option value="Nonfiction">Nonfiction</option>
      </select>
    </div>
  )
}

export default Filter
