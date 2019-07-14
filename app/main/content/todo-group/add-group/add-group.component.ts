import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../../services/todo.service';
import { Status, Todo } from './../../../models/todo.model';
import { TodoGroup } from './../../../models/todoGroup.model';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  action: string;
  group_id: string;
  current_user;
  todoGroup: TodoGroup;
  todoGroupForm: FormGroup;
  todoList: FormArray;
  constructor(private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
    const component = this;
    this.todoGroup = new TodoGroup();
    this.todoGroup.todoList = new Array<Todo>();

    component.activatedRoute.params.subscribe(params => {
      // Get url params
      this.current_user = params['userId'];
      this.group_id = params['groupId'];
    });

    this.todoGroupForm = this.fb.group({
      groupName: ['', Validators.required],
      groupDescription: [''],
      user_id: [this.current_user],
      todoList: this.fb.array([this.createTodo()],  [Validators.required])
    });

    if (this.group_id) {
      this.action = 'edit';
      this.getGroup(this.group_id);

    } else {
      this.action = 'add';
    }
  }

  createTodo() {
    return this.fb.group({
      todoName: ['', Validators.required],
      details: this.fb.group({
        description: [''],
        status: ['New'],
        deadline: ['']
      })
    });
  }

  getGroup(group_id) {
    this.todoService.getTodoGroup(group_id).then( data => {
      this.todoGroupForm.patchValue(data[0]);
      this.todoList = this.todoGroupForm.get('todoList') as FormArray;
      this.todoList.removeAt(0);
      data[0].todoList.forEach(element => {
        this.todoList.push(
          this.fb.group({
            todoName: [element.todoName, Validators.required],
            details: this.fb.group({
              description: [element.details.description],
              status: [element.details.status],
              deadline: [element.details.deadline]
            })
          })
        );
      });
    });
 }

  addTodo() {
    this.todoList = this.todoGroupForm.get('todoList') as FormArray;
    this.todoList.push(this.createTodo());
  }

  get todoArray(): FormArray {
    return this.todoGroupForm.get('todoList') as FormArray;
  }

  deleteTodo(index) {
    this.todoList.removeAt(index);
  }

  addGroup(type) {
    if (type === 'add') {
      this.todoService.addTodoGroup(this.todoGroupForm.value).then( data => {
        this.router.navigate(['profile/', this.current_user]);
      });
    } else {
      this.getGroup(this.group_id);
      this.todoService.editTodoGroup(this.group_id, this.todoGroupForm.value).then( data => {
        this.router.navigate(['profile/', this.current_user]);
      });
    }
  }
}
