import React, { useState } from "react"

import books from "../data/books"

import BookList from "./BookList"

const App = () => {
  const [bookData, setBookData] = useState(books)

  const handleBookFormSubmit = (newBook) => {
    // update the bookData state by using your setter
    // method to combine the current array with the new book
  }

  return (
    <div className="App">
      <header>
        <h2>Bookster</h2>
      </header>
      {/*
          Render <BookList /> and pass the bookData and
          handleBookFormSubmit event handler as props
      */}
    </div>
  )
}

export default App
