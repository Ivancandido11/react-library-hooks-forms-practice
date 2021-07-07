import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BookForm from "../components/BookForm";
import App from "../components/App";

test("calls the onFormSubmit callback prop when the form is submitted", () => {
  const onFormSubmit = jest.fn();
  render(<BookForm onFormSubmit={onFormSubmit} />);

  fireEvent.change(screen.queryByLabelText(/Title/), {
    target: { value: "Scrum" },
  });

  fireEvent.change(screen.queryByLabelText(/Author/), {
    target: { value: "Jeffrey Victor Sutherland" },
  });

  fireEvent.change(screen.queryByLabelText(/Genre/), {
    target: { value: "Business" },
  });

  fireEvent.change(screen.queryByLabelText(/Image/), {
    target: { value: "Whoops" },
  });

  fireEvent.submit(screen.queryByText(/Add to List/));

  expect(onFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      title: "Scrum",
      author: "Jeffrey Victor Sutherland",
      genre: "Business",
      image: "Whoops"
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const businessCount = screen.queryAllByText(/Business/).length;

  fireEvent.change(screen.queryByLabelText(/Title/), {
    target: { value: "Scrum" },
  });

  fireEvent.change(screen.queryByLabelText(/Genre/), {
    target: { value: "Business" },
  });

  fireEvent.submit(screen.queryByText(/Add to List/));

  expect(screen.queryByText(/Scrum/)).toBeInTheDocument();

  expect(screen.queryAllByText(/Business/).length).toBe(businessCount + 1);
});