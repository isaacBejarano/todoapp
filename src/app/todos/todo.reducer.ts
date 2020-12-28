import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create } from './todo.actions';

const initState: Todo[] = [
	new Todo('default') // default state
];

const _todoReducer = createReducer(
  initState,
  on(create, (state, { text }) => [...state, new Todo(text)]) // ~push() without state mutation
);

const todoReducer = (state: Todo[], action: Action) => {
  return _todoReducer(state, action);
};

export { initState, todoReducer };
