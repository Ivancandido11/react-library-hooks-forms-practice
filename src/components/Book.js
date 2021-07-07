import React from "react"

const Book = ({ author, genre, image, title }) => (
  <li>
    <span><strong>{title}</strong> by {author}</span>
    <span className="genre">{genre}</span>
    <img
        alt={title}
        className={"image"}
        src={image}
    />
  </li>
)

export default Book
