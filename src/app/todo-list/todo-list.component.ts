import { Component, OnInit } from '@angular/core';
import { TodoInterface } from "../shared/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit{
  todoElem: string = "";
  todosArray: TodoInterface[] = [];

  ngOnInit(): void {
    const elements: string | null = localStorage.getItem("todoElements");
    if (elements != null) {
      const parsedElements: TodoInterface[] = JSON.parse(elements);
      this.todosArray = parsedElements.map((element) => ({...element, editing: false }));
    }
  }

  onElemAdded(): void {
    const newTodo: TodoInterface = { description: this.todoElem, editing: false };
    this.todosArray.push(newTodo);
    localStorage.setItem("todoElements", JSON.stringify(this.todosArray));
    this.todoElem = "";
  }

  onElemDeleted(index: number): void {
    this.todosArray.splice(index, 1);
    localStorage.setItem("todoElements", JSON.stringify(this.todosArray));
  }

  onElemEdit(index: number): void {
    this.todosArray[index].editing = true;
  }

  onElemSave(index: number): void {
    this.todosArray[index].editing = false;
    localStorage.setItem("todoElements", JSON.stringify(this.todosArray));
  }
}
