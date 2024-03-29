// @ts-check

import { Todo } from "./models/Todo.js";
import { TodoView } from "./views/todoView.js";

const todoModel = new Todo("todo");
const todoView = new TodoView(todoModel);

export const main = {
  /** @param {KeyboardEvent} event */
  createTodoItem(event) {
    if (!(event.target instanceof HTMLInputElement)) return;

    if (event.key !== "Enter" || !event.target?.value.trim()) {
      return { error: "User doesn't pressed Enter key or input was empty" };
    }

    if (!todoView.elements.input) {
      return { error: "Input element doens't exists!" };
    }

    todoModel.addTodo({ title: event.target.value.trim() });

    todoView.elements.input.value = "";
  },

  /** @param {MouseEvent} event  */
  toggleTodoItem(event) {
    if (!(event.target instanceof HTMLInputElement)) return;
    if (event.target.getAttribute("data-todo") !== "toggle") return;

    const id = event.target.closest("[id]")?.getAttribute("id");

    todoModel.toggleTodo({ id });
  },

  /** @param {MouseEvent} event  */
  removeTodo(event) {
    if (!(event.target instanceof HTMLButtonElement)) return;

    if (event.target.getAttribute("data-todo") !== "remove") return;

    const id = event.target.closest("[id]")?.getAttribute("id");

    const todo = todoModel.getTodoById(String(id));

    if (!todo) return;

    const confirmRemove = confirm(
      `Do you really want to remove "${todo.title}"?`
    );

    if (!confirmRemove) return;

    todoModel.removeTodo({ id });
  },

  deleteCompletedTodos() {
    const completedTodos = todoModel.getAllCompletedTodos();

    if (!completedTodos.length) return alert("There are no completed todo.");

    const confirmDelete = confirm(
      `Do you really want do delete ${completedTodos.length} ${
        completedTodos.length > 1 ? "todos" : "todo"
      }?`
    );

    if (!confirmDelete) return;

    todoModel.removeCompletedTodos();
  },

  render() {
    todoView.renderTodoTable();
  },

  init() {
    todoModel.addEventListener("save", main.render);
    todoView.elements.input?.addEventListener("keypress", main.createTodoItem);
    todoView.elements.deleteButton?.addEventListener(
      "click",
      main.deleteCompletedTodos
    );
    todoView.elements.list?.addEventListener("click", main.toggleTodoItem);
    todoView.elements.tableBody?.addEventListener("click", main.toggleTodoItem);
    todoView.elements.tableBody?.addEventListener("click", main.removeTodo);
    main.render();
  },
};

main.init();
