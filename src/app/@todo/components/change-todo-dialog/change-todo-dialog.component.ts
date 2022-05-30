import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoInterface } from 'src/app/@shared/components/iterfaces/todo.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-todos-dialog',
  templateUrl: './change-todo-dialog.component.html',
  styleUrls: ['./change-todo-dialog.component.scss']
})
export class ChangeTodoDialogComponent implements OnInit {
  form = this.fb.group({
    title: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    date: [null, Validators.required],
    description: [null, Validators.maxLength(200)]
});

  dateValue = new FormControl(new Date(this.data.date));

  constructor(
    public dialogRef: MatDialogRef<ChangeTodoDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: TodoInterface,
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
