// @ts-check
import { elements } from "./elements.js";

/**
 *
 * @param {import("../models/Todo.js").ITodo[]} todos
 */
export function renderTodoList(todos) {
  let markup = "";

  todos.forEach(({ id, title, completed }) => {
    markup += `
    <li id="${id}">
      <input name="completed" type="checkbox" data-todo="toggle" ${
        completed && "checked"
      }>
      ${completed ? `<s>${title}</s>` : `${title}`}
    </li>
  `;
  });

  elements.list?.replaceChildren();
  elements.list?.insertAdjacentHTML("afterbegin", markup);
}

/**
 *
 * @param {import("../models/Todo.js").ITodo[]} todos
 */
export function renderTodoTable(todos) {
  let markup = "";

  todos.forEach(({ id, title, completed }, index) => {
    markup += `
      <tr class="table-row__${index}" id="${id}">
          <td class="data-title__${index} ${
      completed && "checked"
    }">${title}</td>
          <td class="data-completed__${index}">
            <input name="completed" type="checkbox" data-todo="toggle" ${
              completed && "checked"
            }>
          </td>
          <td class="data-remove__${index}">
            <button data-todo="remove">Remove Todo</button>
          </td>
      </tr>
  `;
  });

  elements.tableBody?.replaceChildren();
  elements.tableBody?.insertAdjacentHTML("afterbegin", markup);
}
