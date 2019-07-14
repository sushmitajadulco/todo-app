import { Status, Todo } from '../../../models/todo.model';
import { TodoService } from '../../../services/todo.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  todoForm: FormGroup;

  constructor(private route: Router,
    private todoService: TodoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.todo = {
      name: '',
      details: {
        description: '',
        status: Status.NEW,
        deadline: new Date()
      }
    };

    // 1
    // this.todoForm = new FormGroup({
    //   todoName: new FormControl(''),
    //   description: new FormControl(''),
    //   status: new FormControl('')
    // });

    // 2 form group can accept both form group and form control

    // this.todoForm = new FormGroup({
    //   todoName: new FormControl(''),
    //   details: new FormGroup({
    //     description: new FormControl(''),
    //     status: new FormControl(''),
    //     deadline: new FormControl('')
    //   })
    // });

    this.todoForm = this.fb.group({
      todoName: ['', Validators.required],
      details: this.fb.group({
        description: [''],
        status: [''],
        deadline: ['']
      })
    });
  }

  cancel() {
    this.route.navigate(['todolist']);
  }

  add() {
    this.todoService.addToList(this.todo);
    this.route.navigate(['todolist']);
  }
}
