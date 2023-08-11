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
  editingIndex: number | null = null;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todosArray = this.todoListService.getTodos();
  }

  onElemAdded(): void {
    if (this.todoElem.trim() !== "") {
      this.todoListService.addTodo(this.todoElem);
      this.todoElem = "";
    }
  }

  onElemDeleted(index: number): void {
    this.todoListService.deleteTodo(index);
  }

  onElemEdit(index: number): void {
    if (this.editingIndex !== index) {
      this.todoListService.startEditing(index);
      this.resetEditing();
      this.editingIndex = index;}
  }

  onElemSave(index: number): void {
    this.todoListService.finishEditing(index);
    this.resetEditing();
  }

  private resetEditing(): void {
    if (this.editingIndex !== null) {
      this.todosArray[this.editingIndex].editing = false;
      this.editingIndex = null;
    }
  }
}
