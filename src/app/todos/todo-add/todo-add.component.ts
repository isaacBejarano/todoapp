import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// ngRx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/todos/interfaces/app-state.interface';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  textInput: FormControl;

  constructor(
    // inject whole Store
    private store: Store<AppState>
  ) {
    // forms
    this.textInput = new FormControl('', Validators.required);
  }

  create() {
    if (this.textInput.valid) {
      // dispatch
      this.store.dispatch(
        actions.create({
          text: this.textInput.value,
        })
      );
      // clear html
      this.textInput.reset();
    }
  }
}
