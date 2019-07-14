import { LoginModalComponent } from './login-modal/login-modal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private dialog: MatDialog  ) { }

  ngOnInit() {
  }

  public getLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '30%'
    });
  }
}
