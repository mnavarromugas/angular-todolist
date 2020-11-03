import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses(): any {
    const classes: any = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(t => console.log(t));
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }
}
