import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  title = 'Your TODOs';
  openFormValue = false;

  constructor() {}

  openForm(): void {
    this.openFormValue = !this.openFormValue;
  }

  closeForm(value: boolean): void {
    this.openFormValue = value;
  }


}

