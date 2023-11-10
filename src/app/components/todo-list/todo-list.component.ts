import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoItem } from '../../models/TodoItem';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todoList: TodoItem[] = [];
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      todo: ['', Validators.required]
    });
  }

  addTodo(formDirective: FormGroupDirective) {
    if (this.todoForm.valid) {
      const newTodo: TodoItem = {
        id: this.todoList.length + 1,
        description: this.todoForm.get('todo')?.value
      };
  
      this.todoList.push(newTodo)
      this.todoForm.setValue({
        todo: ''
      });

      formDirective.resetForm();
      this.todoForm.reset();
    } else {
      this.todoForm.markAllAsTouched();
    }
  }
}
