import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(  private dialog: MatDialog ) { }

  ngOnInit() {
  }

  getSignUpDialog() {
    const dialogRef = this.dialog.open(SignupModalComponent, {
      width: '30%'
    });
  }

}
