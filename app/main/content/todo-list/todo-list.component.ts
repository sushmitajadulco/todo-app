import { Todo } from '../../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo;

  constructor(private todoService: TodoService,
              private route: Router) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodoList();
  }

  addTodo() {
    this.route.navigate(['todo']);
  }

  setDone(index) {
    this.todoService.updateTodoList(index);
  }
}
