import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo-service';
import { Todo } from '../models/todo.type'
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  isLoading = true;
  todoService: TodoService = inject(TodoService)
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {
    this.todoService.getTodoFromAPI()
    .then(
      observable => {
      observable.subscribe(todos => {
        this.todoItems.set(todos)
        this.isLoading = false;
      })
    }
    )
  }
}
