import { TodoService } from 'src/app/main/services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoList = [];
  current_user;
  user_id;
  constructor(private todoService: TodoService
  ) { }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('user'))[0];
    if (this.current_user.id) {
      this.user_id = this.current_user.id;
      this.getTodos();
    }
  }

  getTodos() {
    const component = this;
    this.todoService.getGroupList(component.user_id).then(data => {
      this.todoList = data[0].todoList;
    });
  }

  isUpcoming(dueDate): boolean {
    let diffDays: number;
    diffDays = 0;

    if (dueDate) {
      const date = new Date(dueDate);
      const timeDiff = new Date().getTime() - date.getTime();
      diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    }
    if (diffDays < 0) {
      return true;
    }
    return false;
  }

  isDue(dueDate): boolean {
    let diffDays: number;
    diffDays = 0;

    if (dueDate) {
      const date = new Date(dueDate);
      const timeDiff = new Date().getTime() - date.getTime();
      diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    }
    if (diffDays === 0) {
      return true;
    }
    return false;
  }

}

