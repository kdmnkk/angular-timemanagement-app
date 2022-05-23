import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoInterface} from "../iterfaces/todo.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>("http://localhost:3000/todos");
  }

  // postTodo(obj: TodoInterface) {
  //   this.http.post("http://localhost:3000/todos", obj);
  // }
}
