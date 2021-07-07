# React Controlled Components Lab

## Learning Goals

- Implement a controlled form

## Overview

In this lab, you'll write and use controlled components, and write
validation for form components.

## Live Mockup

https://user-images.githubusercontent.com/25964192/124780036-4977f080-df10-11eb-94c6-0855905cf575.mov


## Controlled Components

Now that we know how to handle form elements in React and how to set up
controlled components, it's time to put that knowledge to the test. This lab is
fairly extensive, but you'll use many core React concepts here that will surface
again and again. Time to get some practice in!

We'll continue adding new features to the Shopping List app using controlled
components. Make sure to familiarize yourself with the code before diving into
the deliverables! Completing these deliverables will also require understanding
of all the previous topics from this section, including initializing state,
passing data and callback functions as props, and working with events.

## Deliverables

### Filter

In the filter component, there are two input fields.
1. An `input` field for searching our list of books. _When the user types in this
field_, the list of books should be filtered so that only books whose title OR
author match the text are included.
2. A `select` field that will filter our list of books by genre.

In the `<BookList />` component, the `selectedGenre` state and `handleChangeGenre()`
callback function will manage the search input. Similarly, the `textMatch` state and
`handleChangeTextMatch()` callback function will manage the `select` input field.

- Once you've taken a look at how these two components work together, use the
  props to connect the state to the input fields (in the `<Filter />` component).
  Remember, we're trying to make this input a _controlled_ input &mdash; so the
  input's value should always be in sync with state.

- After you've connected the input to state, you'll also need to find a way to
  _set_ state when the input _changes_. You'll need to finish writing the
  `onGenreChange` and `onTextMatchChange` callback functions.

- Finally, after making those changes, you'll need to use that state value to
  determine which items are being displayed on the page, similar to how the
  category dropdown works.

HINT: You can use two different filters:
```js
// const selectedGenre = "Vampires"
// const textMatch = "Bob"
const data = [
  { id: 1, title: "Brave Little Toaster", author: "Tom A.", genre: "Nonfiction" },
  { id: 2, title: "Twilight", author: "Twilight's Author", genre: "Vampires" },
  { id: 3, title: "Bob's (Blood) Burgers", author: "Tim B.", genre: "Vampires" },
]

const filteringByGenre = data.filter(book => book.genre === selectedGenre)
/*
  returns [
  { id: 2, title: "Twilight", author: "Twilight's Author", genre: "Vampires" },
  { id: 3, title: "Bob's (Blood) Burgers", author: "Tim B.", genre: "Vampires" },
]
*/

const filterByGenreAndTextMatch = filteringByGenre.filter(book => {
  return book.title.includes(textMatch) || book.genre.includes(textMatch)
})
/*
  returns [
  { id: 3, title: "Bob's (Blood) Burgers", author: "Tim B.", genre: "Vampires" },
]

```

OR you can chain multiple filters on the same array.
```js
// const selectedGenre = "Vampires"
// const textMatch = "Bob"
const data = [
  { id: 1, title: "Brave Little Toaster", author: "Tom A.", genre: "Nonfiction" },
  { id: 2, title: "Twilight", author: "Twilight's Author", genre: "Vampires" },
  { id: 3, title: "Bob's (Blood) Burgers", author: "Tim B.", genre: "Vampires" },
]

const filteringByGenre = data
  .filter(book => book.genre === selectedGenre)
  .filter(book => book.title.includes(textMatch) || book.genre.includes(textMatch))

/*
  returns [
  { id: 3, title: "Bob's (Blood) Burgers", author: "Tim B.", genre: "Vampires" },
]

```

**This is not actually the answer...you'll need to do a bit more work to check for
all different scenarios and make the tests pass**

### ItemForm

There is a new component called `ItemForm` that will allow us to add new items
to our shopping list. _When the form is submitted_, a new item should be created
and added to our list of items.

- Make all the input fields for this form controlled inputs, so that you can
  access all the form data via state. When setting the initial state for the
  `<select>` tag, use an initial value of "Produce" (since that's the first
  option in the list).

- Handle the form's _submit_ event, and use the data that you have saved in
  state to create a new item object with the following properties:

  ```js
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };
  ```

- Add the new item to the list by updating state. To get the test passing,
  you'll need to use a prop called `onItemFormSubmit` as a callback.

  **NOTE**: to add a new element to an array in state, it's a good idea to use
  the spread operator:

  ```js
  function addElement(element) {
    setArray([...array, element]);
  }
  ```

  The spread operator allows us to copy all the old values of an array into a
  new array, and then add new elements as well. When you're working with state,
  it's important to pass a _new_ array to the state setter function instead of
  mutating the original array.

## Resources

- [React Forms](https://facebook.github.io/react/docs/forms.html)
