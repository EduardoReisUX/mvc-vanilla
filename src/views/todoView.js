// @ts-check

export class TodoView {
  /** @type {import("../models/Todo.js").Todo} */
  #todoModel;

  elements = {
    /** @type {HTMLInputElement | null} */
    input: document.querySelector("[data-todo='new']"),
    /** @type {HTMLButtonElement | null} */
    deleteButton: document.querySelector("[data-todo='delete']"),
    /** @type {HTMLButtonElement | null} */
    removeButton: document.querySelector("[data-todo='remove']"),
    /** @type {HTMLUListElement | null} */
    list: document.querySelector("[data-todo='list']"),
    /** @type {HTMLTableElement | null} */
    tableBody: document.querySelector("[data-todo='table-body']"),
    /** @type {HTMLInputElement | null} */
    checkbox: document.querySelector("[data-todo='toggle']"),
  };

  /** @param {import("../models/Todo.js").Todo} todoModel */
  constructor(todoModel) {
    this.#todoModel = todoModel;
  }

  renderTodoTable() {
    const todos = this.#todoModel.getAllTodos();
    let markup = "";
    debugger;

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

    this.elements.tableBody?.replaceChildren();
    this.elements.tableBody?.insertAdjacentHTML("afterbegin", markup);
  }
}
