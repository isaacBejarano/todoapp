// global reducer to know global state of the app

import { Todo } from './todos/models/todo.model';

interface AppState {
  todos: Todo[];
}

export { AppState };
