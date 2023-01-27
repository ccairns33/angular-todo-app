import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private dataService: DataService){

  }
  // angular life cycle hook called to indicate that Angular is done creating the component
  //  called after the constructor. constructor is called first
  // work should be here instead of constructor
  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm){
    console.log(form.value.text)

    this.dataService.addTodo( new Todo(form.value.text))
  }
}
