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

export default {
  initStore,
};
