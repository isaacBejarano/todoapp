import { Action, createReducer, on } from '@ngrx/store';

import { Todo } from './models/todo.model';
import { create } from './todo.actions';

const initState: Todo[] = [
  // default state
	new Todo('Save the pussy cat'), 
	new Todo('Save money'), 
	new Todo('Save the cheerleader'), 
	new Todo('Save the world'), 
];

const _todoReducer = createReducer(
  initState,
  on(create, (state, { text }) => [...state, new Todo(text)]) // ~push() without state mutation
);

const todoReducer = (state: Todo[], action: Action) => {
  return _todoReducer(state, action);
};

export { initState, todoReducer };
