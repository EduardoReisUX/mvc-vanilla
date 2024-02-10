// @ts-check
import { describe, it, expect, beforeEach } from "vitest";
import { Todo } from "./Todo";

describe("Todo model", () => {
  /** @type {Todo} */
  let todoModel;

  beforeEach(() => {
    todoModel = new Todo("todo-test");
    todoModel.reset();
  });

  it("should init with empty list", () => {
    expect(todoModel.getAllTodos()).empty;
  });

  it("should add a todo", () => {
    todoModel.addTodo({ title: "Hello world" });

    const [todo] = todoModel.getAllTodos();

    expect(todoModel.getAllTodos()).toHaveLength(1);
    expect(todo).toHaveProperty("id");
    expect(todo).toHaveProperty("title", "Hello world");
    expect(todo).toHaveProperty("completed", false);
  });

  it("should toggle a todo as completed", () => {
    todoModel.addTodo({ title: "Hello world" });

    const [todo] = todoModel.getAllTodos();

    todoModel.toggleTodo({ id: todo.id });

    expect(todo).toHaveProperty("id");
    expect(todo).toHaveProperty("title", "Hello world");
    expect(todo).toHaveProperty("completed", true);
  });

  it("should remove a todo", () => {
    todoModel.addTodo({ title: "Hello world" });

    const [todo] = todoModel.getAllTodos();

    todoModel.removeTodo({ id: todo.id });

    expect(todoModel.getAllTodos()).empty;
  });

  it("should remove all completed todos", () => {
    todoModel.addTodo({ title: "Ninjutsu" });
    todoModel.addTodo({ title: "Genjutsu" });
    todoModel.addTodo({ title: "Taijutsu" });

    const [first, second, third] = todoModel.getAllTodos();

    todoModel.toggleTodo({ id: first.id });
    todoModel.toggleTodo({ id: third.id });

    todoModel.removeCompletedTodos();

    expect(todoModel.getAllTodos()).toHaveLength(1);
    expect(todoModel.getAllTodos()).toContainEqual(second);
  });
});
