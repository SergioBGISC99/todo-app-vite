import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Completed: "completed",
  Pending: "pending",
};

const state = {
  todos: [
    new Todo("Gema del alma"),
    new Todo("Gema del tiempo"),
    new Todo("Gema de la realidad"),
    new Todo("Gema de la mente"),
    new Todo("Gema del poder"),
    new Todo("Gema del espacio"),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log("InitStore🥑");
};

const loadStore = () => {
  throw new Error("Not implemented");
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} is not valid.`);
  }
};

/**
 *
 * @param {String} descripcion
 */

const addTodo = (descripcion) => {
  if (!descripcion) throw new Error("Description is required");
  state.todos.push(new Todo(descripcion));
};

const toggleTodo = (todoId) => {
  throw new Error("Not implemented");
};

const deleteTodo = (todoId) => {
  throw new Error("Not implemented");
};

const deleteCompleted = () => {
  throw new Error("Not implemented");
};

const setFilter = (newFilter = Filters.All) => {
  throw new Error("Not implemented");
};

const getCurrentFilter = () => {
  throw new Error("Not implemented");
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
