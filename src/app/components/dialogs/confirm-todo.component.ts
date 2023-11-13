import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-todo',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule ],
  templateUrl: './confirm-todo.component.html',
  styleUrl: './confirm-todo.component.scss'
})
export class ConfirmTodoComponent {

  constructor(private dialogRef: MatDialogRef<boolean>) { }

  closeDialog(res: boolean) {
    this.dialogRef.close(res);
  }
}
