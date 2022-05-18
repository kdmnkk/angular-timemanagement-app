import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {

  @Output() newItemEvent = new EventEmitter<boolean>();

  form = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
    data: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.maxLength(200)]),
  });

  constructor(private fb: FormBuilder) {
  }

  submit() {
    console.log('111')
    console.log(this.form);
  }

  closeForm() {
    this.newItemEvent.emit(false);
  }
}
