// @ts-check

/**
 * @typedef {{
 * id: string,
 * title: string,
 * completed: boolean
 * }} ITodo
 */

export class Todo extends EventTarget {
  /** @type {ITodo[]} */
  #todos;
  #localStorageKey;

  /** @param {string} localStorageKey  */
  constructor(localStorageKey) {
    super();
    this.#localStorageKey = localStorageKey;

    this.#todos = JSON.parse(
      window.localStorage.getItem(localStorageKey) || "[]"
    );

    this.#save();
  }

  #save() {
    window.localStorage.setItem(
      this.#localStorageKey,
      JSON.stringify(this.#todos)
    );
    this.dispatchEvent(new CustomEvent("save"));
  }

  /**
   *
   * @param {string} id
   */
  getTodoById(id) {
    return this.#todos.find((todo) => todo.id === id);
  }

  getAllTodos() {
    return this.#todos;
  }

  getAllCompletedTodos() {
    return this.#todos.filter((todo) => todo.completed === true);
  }

  /**
   *
   * @param {{title:  string}} param0
   */
  addTodo({ title }) {
    this.#todos.push({
      id: crypto.randomUUID(),
      title,
      completed: false,
    });
    this.#save();
  }

  /**
   *
   * @param {{ id: string | null | undefined }} param0
   */
  toggleTodo({ id }) {
    if (typeof id !== "string") {
      return { error: "Id is not a string" };
    }
    const todo = this.#todos.find((todo) => todo.id === id);

    if (!todo) {
      return { error: "Todo.toggleTodo: Todo by given id doesn't exists!" };
    }

    todo.completed = !todo.completed;
    this.#save();
  }

  /**
   *
   * @param {{ id: string | null | undefined }} param0
   */
  removeTodo({ id }) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
    this.#save();
  }

  removeCompletedTodos() {
    this.#todos = this.#todos.filter((todo) => todo.completed === false);
    this.#save();
  }

  reset() {
    this.#todos = [];
    this.#save;
  }
}
