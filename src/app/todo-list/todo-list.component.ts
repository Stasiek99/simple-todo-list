import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit{
  todoElem: string = "";
  todosArray: string[] = [];

  ngOnInit(): void {
    const elements = localStorage.getItem("todoElements");
    if (elements != null) {
      const parsedElements: string[] = JSON.parse(elements);
      this.todosArray = parsedElements.map(element => JSON.parse(element));
    }
  }

  onElemAdd(): void {
    const elementJSON: string = JSON.stringify(this.todoElem);
    this.todosArray.push(elementJSON);
    localStorage.setItem("todoElements", JSON.stringify(this.todosArray));
    this.todoElem = "";
  }
}
