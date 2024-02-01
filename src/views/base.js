// @ts-check

export const elements = {
  /** @type {HTMLInputElement | null} */
  input: document.querySelector("[data-todo='new']"),

  /** @type {HTMLUListElement | null} */
  list: document.querySelector("[data-todo='list']"),

  /** @type {HTMLInputElement | null} */
  checkbox: document.querySelector("[data-todo='toggle']"),
};
