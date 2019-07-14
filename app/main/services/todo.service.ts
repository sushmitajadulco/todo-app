import { Injectable } from '@angular/core';
import { Status, Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  Todo: Array<Todo> = [];

  constructor(private http: HttpClient) {
    this.Todo = [{
      name: 'Grocery',
      details: {
        description: 'buy enough for next week',
        status: Status.NEW,
        dateCompleted: new Date('02/21/2019'),
        deadline: new Date('02/23/2019')
      }
    },
    {
      name: 'Dentist Appointment',
      details: {
        description: 'need to fill in a tooth',
        status: Status.NEW,
        dateCompleted: new Date('02/30/2019'),
        deadline: new Date('02/31/2019')
      }
    }
    ];
  }

  addToList(todo) {
    this.Todo.push(todo);
  }

  getTodoList(): any {
    return this.Todo;
  }

  updateTodoList(index) {
    this.Todo[index].details.status = Status.COMPLETED;
  }

  createTodo(newTodoData): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/todolist', newTodoData)
        .subscribe(
          (response: any) => {resolve(response); },
          reject
        );
    });
  }

  getUser(username, password): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users?username=' + username + '&password=' + password)
        .subscribe(
          (response: any) => {resolve(response); },
          reject
        );
    });
  }

  createUser(newUser): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users', newUser)
        .subscribe(
          (response: any) => {resolve(response); },
          reject
        );
    });
  }

  getGroupList(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/todoGroup?user_id=' + id)
        .subscribe(
          (response: any) => {resolve(response); },
          reject
        );
    });
  }

  getTodoGroup(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/todoGroup?id=' + id)
        .subscribe(
          (response: any) => {resolve(response); },
          reject
        );
    });
  }

  addTodoGroup(newGroup): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/todoGroup', newGroup)
      .subscribe(
        (response: any) => {resolve(response); },
          reject
      );
    });
  }

  editTodoGroup(id, groupData): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/todoGroup/' + id, groupData)
      .subscribe(
        (response: any) => {resolve(response); },
          reject
      );
    });
  }

  deleteTodoGroup(index): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/todoGroup/' + index)
      .subscribe( result => {  }
      );
    });
  }
}
