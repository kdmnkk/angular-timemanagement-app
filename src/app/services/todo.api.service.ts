import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoInterface} from "../iterfaces/todo.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>("http://localhost:3000/todos");
  }

  postData(obj: TodoInterface) {
    return this.http.post<TodoInterface[]>("http://localhost:3000/todos", obj);
  }

  deleteData(id: number) {
    return this.http.delete<void>(`http://localhost:3000/todos/${id}`);
  }
}
