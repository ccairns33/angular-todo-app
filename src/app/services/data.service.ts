import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] =[
    new Todo("This is a test with no completed"),
    new Todo("This is a second test with no completed"),
    new Todo("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, debitis. Expedita laboriosam, non quaerat vitae esse voluptates soluta officiis quod ipsa. Architecto odio illum ab illo, magnam magni voluptates exercitationem.")

  ];

  constructor() { }

  getAllTodos(){
    return this.todos;
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }
  updateTodo(index: number, updatedTodo: Todo){
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
