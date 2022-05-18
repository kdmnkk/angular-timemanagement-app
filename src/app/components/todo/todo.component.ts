import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'Your TODOs';
  openFormValue = false;

  constructor() { }

  ngOnInit(): void {
  }

  openForm(): void {
    this.openFormValue = !this.openFormValue;
  }

  closeForm(value: boolean): void {
    this.openFormValue = value;
  }
}

