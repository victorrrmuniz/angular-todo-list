import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoItem } from '../../models/TodoItem';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todoList: TodoItem[] = [];

  addTodo(todo: HTMLInputElement) {
    const newTodo: TodoItem = {
      id: this.todoList.length + 1,
      description: todo.value
    };

    this.todoList.push(newTodo);
    todo.value = '';
  }
}
