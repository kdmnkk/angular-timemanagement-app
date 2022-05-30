import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/@shared/components/services/todo.service';
import { ChangeTodoDialogComponent } from 'src/app/@todo/components/change-todo-dialog/change-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent{
  @Input() title = '';
  @Input() date = '';
  @Input() description = '';
  @Input() id: any;

  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  removeTodo(id: number, e: any) {
    let answer = confirm('Do you want delete this todos?');
    if (answer) {
      this.todoService.deleteTodo(id)
    } else {
      e.source.checked = false;
    }
  }

  changeTodo(id: number, title: string, date: string, description: string) {
    const dialogRef = this.dialog.open(ChangeTodoDialogComponent, {
      width: '360px',
      data: {id: id, title: title, date: date, description: description},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoService.changeTodo(id, result);
      }
    });
  }
}
