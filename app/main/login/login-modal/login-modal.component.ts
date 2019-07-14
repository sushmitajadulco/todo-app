import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/main/services/todo.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  current_user = '';
  constructor(private fb: FormBuilder,
    private todoService: TodoService,
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private router: Router) { }

  loginFormGroup: FormGroup;

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.todoService.getUser(this.loginFormGroup.get('username').value,
      this.loginFormGroup.get('password').value).then(
        data => {
          this.current_user = data;
          localStorage.setItem('user', JSON.stringify(data));
          this.dialogRef.close();
          location.reload();
        }
      );
  }
}
