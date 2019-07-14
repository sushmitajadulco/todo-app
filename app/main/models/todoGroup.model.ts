import { Todo } from './todo.model';

export class TodoGroup {
    groupName: string;
    groupDescription: string;
    user_id: number;
    todoList: Array<Todo>;
}
