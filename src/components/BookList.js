import React, { useState } from "react"

import BookForm from "./BookForm"
import Filter from "./Filter"
import Book from "./Book"

const BookList = ({ books, handleBookFormSubmit }) => {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [textMatch, setTextMatch] = useState("")

  const handleChangeGenre = (genre) => {
    setSelectedGenre(genre)
  }
  const handleChangeTextMatch = (userText) => {
    setTextMatch(userText)
  }

  const booksToDisplay = books.filter(book => (
    book.genre === selectedGenre || selectedGenre === "All") && (
    book.title.includes(textMatch) || 
    book.author.includes(textMatch))
  )

  return (
    <div className="library">
      <BookForm onFormSubmit={handleBookFormSubmit} />
      <Filter
          onGenreChange={handleChangeGenre}
          onTextMatchChange={handleChangeTextMatch}
          selectedGenre={selectedGenre}
          textMatch={textMatch}
      />
      <ul className="Items">
        {booksToDisplay.map(book => {
          return <Book
            key={book.id}
            author={book.author}
            genre={book.genre}
            image={book.image}
            title={book.title}
          />
        })
        }
      </ul>
    </div>
  )
}

export default BookList
