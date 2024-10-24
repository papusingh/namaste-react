import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load input name inside contact us component", () => {
  render(<Contact />);
  const name = screen.getByPlaceholderText("name");
  expect(name).toBeInTheDocument();
});

test("Should load input message inside contact us component", () => {
  render(<Contact />);
  const message = screen.getByPlaceholderText("message");
  expect(message).toBeInTheDocument();
});

test("Should load input message inside contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
