// @ts-check

export const elements = {
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
