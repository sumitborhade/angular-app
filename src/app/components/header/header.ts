import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [TodoService]
})
export class Header {
    title = signal('My first Angular App!!!')
}