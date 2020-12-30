// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
  ],
  /* NOTE: 
    Angular sys won't duplciate ReactiveFormsModule instance / it was loaded in app.mopdule.
    But we need to declare it as an import here too / todo.module is encapsulated.
    It knows nothing about what's going on in app.module
  */
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoPageComponent], // exception -> make todo-page visible outside todos.module
})
export class TodoModule {}
