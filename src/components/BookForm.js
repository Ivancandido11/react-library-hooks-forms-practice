import React, { useState } from "react"
import { v4 as uuid } from "uuid"

const BookForm = ({ onFormSubmit }) => {
  const [newBook, setNewBook] = useState({
    id: uuid(),
    title: "",
    author: "",
    image: "",
    genre: "Business"
  })
  
  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setNewBook({
      ...newBook,
      [key]: value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(newBook)
    setNewBook({
      id: uuid(),
      title: "",
      author: "",
      image: "",
      genre: "Business"
    })
  }

  return (
    <form 
      onSubmit={handleFormSubmit}
      className="NewItem"
    >
      <div style={{ marginBottom: "8px" }}>
        <label>
          Title:
          <input 
            onChange={handleChange}
            type="text" 
            name="title"
            value={newBook.title}
          />
        </label>
        <label>
          Author:
          <input 
            onChange={handleChange}
            type="text" 
            name="author"
            value={newBook.author}
          />
        </label>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <label>
          Image Link:
          <input 
            onChange={handleChange}
            type="text" 
            name="image" 
            value={newBook.image}
          />
        </label>

        <label>
          Genre:
          <select 
            onChange={handleChange}
            name="genre"
            value={newBook.genre}
          >
            <option value="Business">Business</option>
            <option value="Fiction">Fiction</option>
            <option value="History">History</option>
            <option value="Nonfiction">Nonfiction</option>
          </select>
        </label>
      </div>

      <button type="submit">Add to List</button>
    </form>
  )
}
export default BookForm