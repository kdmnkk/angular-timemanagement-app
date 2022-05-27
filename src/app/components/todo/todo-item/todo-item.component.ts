import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() title = '';
  @Input() data = '';
  @Input() description = '';
  @Input() done = false;
  @Input() id: any;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  removeTodo(id: number) {
    console.log(id);
    this.todoService.deleteTodo(id);
  }
}
