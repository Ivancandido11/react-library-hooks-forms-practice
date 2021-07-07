import React, { useState } from "react"

import BookForm from "./BookForm"
import Filter from "./Filter"
import Book from "./Book"

const BookList = ({ books, handleBookFormSubmit }) => {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [textMatch, setTextMatch] = useState("")

  const handleChangeGenre = (event) => {
    // set the selected genre here
  }

  const handleChangeTextMatch = (event) => {
    // set the text match here.
  }

  /*
    booksToDisplay should be the result of books filtered by:
      1. genre (selectedGenre)
      2. title/author (check if textMatch matches the book's title OR the book's author)
  */
  const booksToDisplay = []

  return (
    <div className="library">
      <BookForm onFormSubmit={handleBookFormSubmit} />
      <Filter
          onGenreChange={handleChangeGenre}
          onTextMatchChange={handleChangeTextMatch}
      />
      <ul className="Items">
        {/* iterate over booksToDisplay, and render a <Book /> component for each book */}
      </ul>
    </div>
  )
}

export default BookList
