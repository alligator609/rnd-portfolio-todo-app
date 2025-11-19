import { Component } from '@angular/core';
import { TodoInterface } from '../../models/todo-interface';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
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
  newTodo = {
    id: 0,
    title: '',
    description: '',
    completed: false,
    createdAt: new Date()
  };
  constructor() {}

   todoForm = new FormGroup({
    title : new FormControl('', [Validators.required,Validators.minLength(3)]),
    description: new FormControl('',Validators.required)
  });
  addTodo() { 
   console.log(this.todoForm.value);
    if (this.todoForm.valid) {
      const newId = this.dummyTodos.length > 0 ? Math.max(...this.dummyTodos.map(todo => todo.id)) + 1 : 1;
      const newTodo: TodoInterface = {
        id: newId,
        title: this.todoForm.value.title || '',
        description: this.todoForm.value.description || '',
        completed: false,
        createdAt: new Date()
      };
      this.dummyTodos.push(newTodo);
      this.todoForm.reset();
    }
  }
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
  editTodo(id: number) {
    const todo = this.dummyTodos.find(todo => todo.id === id);
    if (todo) {
      this.todoForm.setValue({
        title: todo.title,
        description: todo.description
      });
      this.removeTodo(id);
    }
  }
}

