import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() _todo: Todo;
  @ViewChild('inputEditor') inputEditor: ElementRef; // prefer ElementRef over HTMLElement
  checkInput: FormControl;
  textEdit: FormControl;
  editing: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkInput = new FormControl(this._todo.completion);
    this.textEdit = new FormControl(this._todo.text, Validators.required);
  }

  enterEditor() {
    this.editing = true;

    // workaround since Angular too fast and select() isn't apply (better than focus())
    setTimeout(() => this.inputEditor.nativeElement.select(), 300);
  }

  exitEditor() {
    this.editing = false;
    // setTimeout(() => (this.editing = false), 300);
  }
}
