import React, { useState } from "react"

import books from "../data/books"

import BookList from "./BookList"

const App = () => {
  const [bookData, setBookData] = useState(books)

  const handleBookFormSubmit = (newBook) => {
   setBookData([...bookData, newBook])
  }

  return (
    <div className="App">
      <header>
        <h2>Bookster</h2>
      </header>
      <BookList 
      books={bookData}
      handleBookFormSubmit={handleBookFormSubmit}
      />
    </div>
  )
}

export default App
