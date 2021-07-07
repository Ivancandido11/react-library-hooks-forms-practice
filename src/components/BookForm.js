import React from "react"
import { v4 as uuid } from "uuid"

const BookForm = (props) => (
  <form className="NewItem">
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <label>
      Author:
      <input type="text" name="author" />
    </label>
    <br />
    <label>
      Image Link:
      <input type="text" name="image" />
    </label>

    <label>
      Genre:
      <select name="genre">
        <option value="Business">Business</option>
        <option value="Fiction">Fiction</option>
        <option value="History">History</option>
        <option value="Nonfiction">Nonfiction</option>
      </select>
    </label>

    <button type="submit">Add to List</button>
  </form>
)

export default BookForm
