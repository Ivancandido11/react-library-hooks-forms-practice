import React, { useState } from "react"

import bookData from "../data/books"

import BookList from "./BookList"

const App = () => {
  const [books, setBooks] = useState(bookData)

  return (
    <div className="App">
      <header>
        <h2>Shopster</h2>
      </header>
      <BookList books={books} />
    </div>
  )
}

export default App
