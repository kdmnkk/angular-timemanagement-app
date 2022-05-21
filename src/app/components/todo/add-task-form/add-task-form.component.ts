import { Component, Output, EventEmitter, HostListener, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})

export class AddTaskFormComponent {
  @Input() open!: boolean;
  @Input() button!: any;
  @Output() newItemEvent = new EventEmitter<boolean>();

  @HostListener('window:click', ['$event.target'])
  CloseFormWithoutBtn(event: any) {
    if(this.open) {
      if (
        !this._eref.nativeElement.contains(event)
        && !this.button._elementRef.nativeElement.contains(event)
        && !event.className.includes('calendar')
      ) {
        this.closeForm();
      }
    }
  }

  form = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
    data: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.maxLength(200)]),
  });

  constructor(private fb: FormBuilder, private _eref: ElementRef) {}

  submit() {
    console.log(this.form);
  }

  closeForm() {
    this.newItemEvent.emit(false);
  }
}
