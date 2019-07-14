import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/main/services/todo.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {


  constructor(private fb: FormBuilder,
              private todoService: TodoService,
              public dialogRef: MatDialogRef<SignupModalComponent>) { }

  signUpUserFormGroup: FormGroup;

  ngOnInit() {
    this.signUpUserFormGroup = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    this.todoService.createUser(this.signUpUserFormGroup.value);
    this.dialogRef.close();
  }

}
