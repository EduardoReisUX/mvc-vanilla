// @ts-check
import { elements } from "../views/base.js";

/**
 *
 * @param {import("../models/Todo.js").ITodo[]} todos
 */
export function renderTodo(todos) {
  let markup = "";

  todos.forEach(({ id, title, completed }) => {
    markup += `
    <li id="${id}">
      <input name="completed" type="checkbox" data-todo="toggle" ${
        completed && "checked"
      }>
      <b>${title}</b>
    </li>
  `;
  });

  elements.list?.replaceChildren();
  elements.list?.insertAdjacentHTML("afterbegin", markup);
}
