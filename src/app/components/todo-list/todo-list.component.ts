import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TodoItem } from '../../models/TodoItem';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmTodoComponent } from '../dialogs/confirm-todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule
    ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todoList: TodoItem[] = [];
  todoForm!: FormGroup;
  taskId: number = 1;

  constructor(private fb: FormBuilder,
    private dialog: MatDialog) {
    this.todoForm = this.fb.group({
      todo: ['', Validators.required]
    });
  }

  addTodo(formDirective: FormGroupDirective) {
    if (this.todoForm.valid) {
      const newTodo: TodoItem = {
        id: this.taskId++,
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

  done(item: TodoItem) {
    const dialogRef = this.dialog.open(ConfirmTodoComponent, { panelClass: 'confirm-dialog' });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.todoList = this.todoList.filter(todo => todo != item);
    });

    
  }
}
