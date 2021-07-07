import React, { useState } from "react"

import BookForm from "./BookForm"
import Filter from "./Filter"
import Book from "./Book"

const BookList = ({ books, handleBookFormSubmit }) => {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [textMatch, setTextMatch] = useState("")

  const handleChangeGenre = (event) => setSelectedGenre(event.target.value)
  const handleChangeTextMatch = (event) => setTextMatch(event.target.value)

  const booksToDisplay = books
    .filter((book) => selectedGenre === "All" || book.genre === selectedGenre)
    .filter((book) => book.title.toLowerCase().includes(textMatch.toLowerCase()) || book.author.toLowerCase().includes(textMatch.toLowerCase()))

  return (
    <div className="library">
      <BookForm onFormSubmit={handleBookFormSubmit} />
      <Filter
          onGenreChange={handleChangeGenre}
          onTextMatchChange={handleChangeTextMatch}
      />
      <ul className="Items">
        {
          booksToDisplay.map(book => (
            <Book
                author={book.author}
                genre={book.genre}
                image={book.image}
                key={book.id}
                title={book.title}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default BookList
