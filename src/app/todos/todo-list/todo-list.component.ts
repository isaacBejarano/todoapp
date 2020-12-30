import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[];

  constructor(
    // inject Store
    private store: Store<AppState>
  ) {
    // prettier-ignore
    this.store
      .select('todos')
      .subscribe((todos) => (this.todos = todos));
  }
}
