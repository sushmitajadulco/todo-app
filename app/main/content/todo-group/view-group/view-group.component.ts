import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/main/services/todo.service';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  group_id;
  current_user;
  todoGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private todoService: TodoService) { }

  ngOnInit() {
    const component = this;
    component.activatedRoute.params.subscribe(params => {
      // Get url params
      this.group_id = params['groupId'];
    });
    this.getGroup(this.group_id);

  }

  getGroup(id) {
    const component = this;

    this.todoService.getTodoGroup(id).then(data => {
      this.todoGroup = data;
    });
  }

}
