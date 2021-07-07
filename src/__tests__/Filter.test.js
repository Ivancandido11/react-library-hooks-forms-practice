import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import BookList from "../components/BookList";

const testData = [
  { id: 1, title: "A People's History", author: "Howard Zinn", genre: "History", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494279423l/2767._SY475_.jpg" },
  { id: 2, title: "Belonging", author: "Toko-pa Turner", genre: "Nonfiction", image: "https://images-na.ssl-images-amazon.com/images/I/713kd5KWXIL.jpg" },
  { id: 3, title: "The Gifts of Imperfection", author: "Brene Brown", genre: "Nonfiction", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369092544l/7015403.jpg" },
  { id: 4, title: "An Indigenous Peoples' History", author: "Roxanne Dunbar-Ortiz", genre: "History", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395003842l/20588662.jpg" },
  { id: 5, title: "The One Thing", author: "Gary Keller and Jay Papasan", genre: "Business", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559563270l/16256798._SX318_.jpg" },
];

// Filter
const noop = () => {};
test("calls the onTextMatchChange callback prop when the input is changed", () => {
  const onChange = jest.fn();
  render(<Filter onGenreChange={noop} onTextMatchChange={onChange} />);

  fireEvent.change(screen.queryByPlaceholderText(/Search/), {
    target: { value: "testing123" },
  });

  expect(onChange).toHaveBeenCalled();
});

test("the input field acts as a controlled input", () => {
  render(<BookList books={testData} />);

  fireEvent.change(screen.queryByPlaceholderText(/Search/), {
    target: { value: "testing 123" },
  });

  expect(screen.queryByPlaceholderText(/Search/).value).toBe("testing 123");
});

// Book list
test("the book list displays all items when initially rendered", () => {
  const { container } = render(<BookList books={testData} />);
  expect(container.querySelector(".Items").children).toHaveLength(
    testData.length
  );
});

test("the book list filters based on the search term to include full matches", () => {
  render(<BookList books={testData} />);

  fireEvent.change(screen.queryByPlaceholderText(/Search/), {
    target: { value: "Toko-pa Turner" },
  });

  expect(screen.queryByText("Belonging")).toBeInTheDocument();
  expect(screen.queryByText("The Gifts of Imperfection")).not.toBeInTheDocument();
});

test("the book list filters based on the search term to include partial matches", () => {
  render(<BookList books={testData} />);

  fireEvent.change(screen.queryByPlaceholderText(/Search/), {
    target: { value: "History" },
  });

  expect(screen.queryByText("A People's History")).toBeInTheDocument();
  expect(screen.queryByText("An Indigenous Peoples' History")).toBeInTheDocument();
  expect(screen.queryByText("Belonging")).not.toBeInTheDocument();
  expect(screen.queryByText("The One Thing")).not.toBeInTheDocument();
});
