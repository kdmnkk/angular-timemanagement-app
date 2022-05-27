import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoInterface } from 'src/app/iterfaces/todo.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-todo-dialog',
  templateUrl: './change-todo-dialog.component.html',
  styleUrls: ['./change-todo-dialog.component.scss']
})
export class ChangeTodoDialogComponent implements OnInit {
  form = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.maxLength(200)]),
});

  dateValue = new FormControl(new Date(this.data.date));

  constructor(
    public dialogRef: MatDialogRef<ChangeTodoDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: TodoInterface,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
