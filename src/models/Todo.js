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
  _todos;

  constructor() {
    super();
    this._todos = [];
  }

  _save() {
    this.dispatchEvent(new CustomEvent("save"));
  }

  /**
   *
   * @param {string} id
   */
  getTodoById(id) {
    return this._todos.find((todo) => todo.id === id);
  }

  getAllTodos() {
    return this._todos;
  }

  /**
   *
   * @param {{title:  string}} param0
   */
  addTodo({ title }) {
    this._todos.push({
      id: `id_${Date.now()}`,
      title,
      completed: false,
    });
    this._save();
  }

  /**
   *
   * @param {{ id: string }} param0
   */
  toggleTodo({ id }) {
    const todo = this._todos.find((todo) => todo.id === id);

    if (!todo) {
      return { error: "Todo.toggleTodo: Todo by given id doesn't exists!" };
    }

    todo.completed = !todo.completed;
    this._save();
  }

  /**
   *
   * @param {{ id: string }} param0
   */
  removeTodo({ id }) {
    this._todos = this._todos.filter((todo) => todo.id !== id);
    this._save();
  }
}
