import {Component} from '@angular/core';
import {TodoService} from 'src/app/@shared/components/services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent{
  title = 'Your TODOs';
  openFormValue = false;
  todos$ = this.todoService.todos;

  constructor(private todoService: TodoService) {}

  openForm(): void {
    this.openFormValue = !this.openFormValue;
  }

  closeForm(value: boolean): void {
    this.openFormValue = value;
  }
}

