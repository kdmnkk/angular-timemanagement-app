import { Injectable } from '@angular/core';
import {TodoApiService} from './todo.api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private TodoApiService: TodoApiService) { }

  logTodos() {
    return this.TodoApiService.getTodos()
  }


}
