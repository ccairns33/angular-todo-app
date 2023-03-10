import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{

  @Input() todo: Todo;

 
  constructor(){

  }

  ngOnInit(): void {
    
  }

  onTodoClicked(){
    console.log("todo was clicked")
  }
}
