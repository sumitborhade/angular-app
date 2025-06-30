import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';
import { of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient)

  async getTodoFromAPI() {
    return timer(1000)
      .pipe( // Wait for 30 seconds
        switchMap(() => {
            return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos');
        })
      );
  }

  constructor() { }
}
