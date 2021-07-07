import React from "react"

const Filter = ({ onGenreChange, onTextMatchChange, selectedGenre, textMatch }) => {
  // TODO: connect selectedGenre and textMatch to the inputs
  // TODO: implement onGenreChange and onTextMatchChange callbacks

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
