import React, { useState } from "react"
import { v4 as uuid } from "uuid"

const BookForm = ({ onFormSubmit }) => {
  const [titleInput, setTitleInput] = useState("")
  const [authorInput, setAuthorInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [genreInput, setGenreInput] = useState("Business")

  const handleTitleChange = (event) => setTitleInput(event.target.value)
  const handleAuthorChange = (event) => setAuthorInput(event.target.value)
  const handleImageChange = (event) => setImageInput(event.target.value)
  const handleGenreChange = (event) => setGenreInput(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newBook = {
      id: uuid(),
      title: titleInput,
      author: authorInput,
      image: imageInput,
      genre: genreInput
    }

    onFormSubmit(newBook)
  }

  return (
    <form
        className="NewItem"
        onSubmit={handleSubmit}
    >
      <div style={{ marginBottom: "8px" }}>
        <label>
          Title:
          <input
              name="title"
              onChange={handleTitleChange}
              type="text"
              value={titleInput}
          />
        </label>
        <label>
          Author:
          <input
              name="author"
              onChange={handleAuthorChange}
              type="text"
              value={authorInput}
          />
        </label>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <label>
          Image Link:
          <input
              name="image"
              onChange={handleImageChange}
              type="text"
              value={imageInput}
          />
        </label>

        <label>
          Genre:
          <select
              name="genre"
              onChange={handleGenreChange}
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
