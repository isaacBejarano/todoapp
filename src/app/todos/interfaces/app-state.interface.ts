// global reducer to know global state of the app
import { Todo } from '../models/todo.model';

interface AppState {
  todos: Todo[];
  // users: User[],
  // products: Products[],
  // etc...
}

export { AppState };
