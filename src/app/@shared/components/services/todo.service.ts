import { Injectable } from '@angular/core';
import { TodoApiService } from 'src/app/@shared/components/services/todo.api.service';
import { TodoInterface } from 'src/app/@shared/components/iterfaces/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos = new BehaviorSubject<TodoInterface[]>([]);

  constructor(private todoApiService: TodoApiService) {
    this.loadInitialData();
  }

  get todos(): Observable<TodoInterface[]> {
    return this._todos.asObservable();
  }

  loadInitialData(): void {
    this.todoApiService.getData().subscribe((todos: TodoInterface[]) => {
      this._todos.next(todos.reverse());
    });
  }

  createTodo(obj: TodoInterface) {
    const todoItem: TodoInterface = {
      ...obj,
      id: Math.floor(Math.random() * 1000000)
    };

    return this.todoApiService.postData(todoItem)
      .subscribe(() => {
        this._todos.getValue().unshift(todoItem);
      });
  }

  deleteTodo(id: number) {
    return this.todoApiService.deleteData(id)
      .subscribe(() => {
        this._todos.next(this._todos.getValue().filter(item => item.id !== id));
      });
  }

  changeTodo(id: number, todo: TodoInterface) {
    return this.todoApiService.putData(id, todo).subscribe(
      () => {
        let i = this._todos.getValue().findIndex(item => item.id === id);
        this._todos.getValue()[i] = {id: id, ...todo};
        this._todos.next(this._todos.getValue());
      //  console.log();
      }
    );
  }
}
