import React, { useState } from "react"

import books from "../data/books"

import BookList from "./BookList"

const App = () => {
  const [bookData, setBookData] = useState(books)

  const handleBookFormSubmit = (newBook) => {
    /*
      Ignore this part until you get to the BookForm section of the exercise.
      You can still pass it as a prop to <BookList /> before the function is written.

      TODO: Update the bookData state to include the newly created book
      by using your setter method to combine the current array with the new book data
    */
  }

  return (
    <div className="App">
      <header>
        <h2>Bookster</h2>
      </header>
      {/*
          TODO: Render <BookList /> and pass the bookData and
          handleBookFormSubmit event handler as props
      */}
    </div>
  )
}

export default App
