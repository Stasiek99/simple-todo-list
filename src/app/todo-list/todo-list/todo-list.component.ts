import { Component, OnInit } from '@angular/core';
import { TodoInterface } from "../../shared/todo.interface";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit{
  todoElem: string = "";
  todosArray: TodoInterface[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todosArray = this.todoListService.getTodos();
  }

  onElemAdded(): void {
    this.todoListService.addTodo(this.todoElem);
    this.todoElem = "";
  }

  onElemDeleted(index: number): void {
    this.todoListService.deleteTodo(index);
  }

  onElemEdit(index: number): void {
    this.todoListService.editTodo(index);
  }

  onElemSave(index: number): void {
    this.todoListService.saveTodo(index);
  }
}
