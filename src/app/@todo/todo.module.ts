import { NgModule } from '@angular/core';

import { TodoComponent } from 'src/app/@todo/todo.component';
import { AddTaskFormComponent } from 'src/app/@todo/components/add-task-form/add-task-form.component';
import { TodoItemComponent } from 'src/app/@todo/components/todo-item/todo-item.component';
import { ChangeTodoDialogComponent } from 'src/app/@todo/components/change-todo-dialog/change-todo-dialog.component';

import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [
    TodoComponent,
    AddTaskFormComponent,
    TodoItemComponent,
    ChangeTodoDialogComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class TodoModule { }
