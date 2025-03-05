import React from "react";
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders the initial todos", () => {
    render(<TodoList />);
    
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", async () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    await waitFor(() => {
        expect(todoItem.parentElement).toHaveAttribute("class", "completed");
    });
});

test("deletes a todo", async () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React").closest("li"); // Get the parent <li>
    const deleteButton = within(todoItem).getByRole("button", { name: /delete/i });

    console.log("Before delete:", screen.debug());
  
    fireEvent.click(deleteButton);
  
    await waitFor(() => {
        console.log("After delete:", screen.debug());
        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
        });
    });  
});
