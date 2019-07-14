import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/main/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  current_user;
  user_id;
  todoGroupList = [];

  constructor(private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('user'))[0];

    const component = this;
    component.activatedRoute.params.subscribe(params => {
      // Get url params
      component.user_id = params['userId'];
    });

    this.getTodoGroupList();
  }

  getTodoGroupList() {
    const component = this;
    this.todoService.getGroupList(component.user_id).then(data => {
      this.todoGroupList = data;
    });
  }

  addGroup() {
    this.router.navigate(['addGroup/', this.user_id]);
  }

  editGroup(group_id) {
    this.router.navigate(['editGroup/', this.user_id, group_id]);
  }

  deleteGroup(index) {
    location.reload();
    const component = this;
    this.todoService.deleteTodoGroup(index).then(data => {
      this.getTodoGroupList();
    });
  }

  showTodoList(group_index) {
    this.router.navigate(['viewGroup/', group_index]);
  }
}
