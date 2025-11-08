import { Component } from '@angular/core';
import { TodoInterface } from '../../models/todo-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
 
})
export class Todo {
  dummyTodos: TodoInterface[] = [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, Bread, Eggs, Butter',
      completed: false,
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Walk the dog',
      description: 'Take Fido for a walk in the park',
      completed: true,
      createdAt: new Date()
    }
  ];
  // newTodo = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   completed: false,
  //   createdAt: new Date()
  // };
  constructor() {}

  // addTodo() { 
  //   this.dummyTodos.push(this.newTodo);
  // }
  removeTodo(id: number) {
    console.log(id);
    this.dummyTodos = this.dummyTodos.filter(todo => todo.id !== id);
  }
  toggleComplete(id: number) {
    const todo = this.dummyTodos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}

