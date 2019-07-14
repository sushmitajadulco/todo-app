import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  current_user;
  constructor(private router: Router) { }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('user'))[0];
  }

  showProfile() {
    this.router.navigate(['profile/', this.current_user.id]);
  }

  logOut() {
    this.current_user = null;
    localStorage.setItem('user', null);
    this.router.navigate(['']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
