import React, { useState } from "react"
import { v4 as uuid } from "uuid"

const BookForm = ({ onFormSubmit }) => {
  /*
    Make this form into a controlled component.
    This can be done by using useState to manage the values for:
      - name
      - author
      - image
      - genre
    Then onSubmit of the form, call onFormSubmit with the current form values.
  */
  return (
    <form className="NewItem">
      <div style={{ marginBottom: "8px" }}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Author:
          <input type="text" name="author" />
        </label>
      </div>

      <div style={{ marginBottom: "8px" }}>
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
      </div>

      <button type="submit">Add to List</button>
    </form>
  )
}
export default BookForm
