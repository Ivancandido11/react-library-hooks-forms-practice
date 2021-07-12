import React from "react"

const Filter = ({ onGenreChange, onTextMatchChange, selectedGenre, textMatch }) => {
  const handleInputChange = (e) => {
    const userText = e.target.value
    onTextMatchChange(userText)
  }
  const handleSelectChange = (e) => {
    const genre = e.target.value
    onGenreChange(genre)
  }

  return (
    <div className="Filter">
      <input
          onChange={handleInputChange}
          name="search"
          placeholder="Search by title or author..."
          type="text"
          value={textMatch}
      />
      <select onChange={handleSelectChange} name="filter" value={selectedGenre}>
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
