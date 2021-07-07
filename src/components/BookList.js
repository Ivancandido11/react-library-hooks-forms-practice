import React, { useState } from "react"

import BookForm from "./BookForm"
import Filter from "./Filter"
import Book from "./Book"

const BookList = ({ books, handleBookFormSubmit }) => {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [textMatch, setTextMatch] = useState("")

  const handleChangeGenre = (event) => {
    // TODO: Set the selected genre state here
  }

  const handleChangeTextMatch = (event) => {
    // TODO: Set the text match state here.
  }

  /*
    TODO: booksToDisplay should be the result of books filtered by:
      1. genre (selectedGenre)
      2. title/author (check if textMatch matches the book's title OR the book's author)
  */
  const booksToDisplay = []

  return (
    <div className="library">
      <BookForm onFormSubmit={handleBookFormSubmit} />
      <Filter
          // TODO: Pass selectedGenre and textMatch as props
          onGenreChange={handleChangeGenre}
          onTextMatchChange={handleChangeTextMatch}
      />
      <ul className="Items">
        {/*
          TODO: iterate over booksToDisplay, and render a <Book /> component for each book.
          CHeck out the Book.js file to see what props it takes
        */}
      </ul>
    </div>
  )
}

export default BookList
