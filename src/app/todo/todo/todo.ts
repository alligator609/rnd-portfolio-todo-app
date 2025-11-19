import { Component } from '@angular/core';
import { TodoInterface } from '../../@models/todo-interface';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../@services/todo.service';

@Component({
  //standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-todo',
  templateUrl: './todo.html',
  styleUrls: ['./todo.scss'],
})
export class Todo{
  dummyTodos: TodoInterface[] = [];
  constructor( private todoService :TodoService) {}

   todoForm = new FormGroup({
    uid : new FormControl(''),
    title : new FormControl('', [Validators.required,Validators.minLength(3)]),
    description: new FormControl('',Validators.required)
  });

  fetchTodos(){
    this.todoService.getTodos().then((todos: TodoInterface[])=>{
    this.dummyTodos = todos;
      console.log('Fetched todos:', this.dummyTodos);
    });
  }

  ngOnInit(){
    this.fetchTodos();
  }

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
      // this.dummyTodos.push(newTodo);
      // this.todoForm.reset();
      // add into firestore
      let uid = this.todoForm.value.uid;
      if(uid){
        this.todoService.update(uid,newTodo).then(()=>{
          console.log('Todo updated with UID:', uid);
          this.fetchTodos();
          this.resetForm();
        }).catch((error)=>{
          console.error('Error updating todo:', error);
        });
      }
      else{
      this.todoService.create(newTodo).then((uid)=>{
        console.log('Todo created with UID:', uid);
        this.fetchTodos();
        this.resetForm();
      }).catch((error)=>{
        console.error('Error creating todo:', error);
      });
      }
     
    }
  }
  removeTodo(todo :TodoInterface) {
    // this.dummyTodos = this.dummyTodos.filter(todo => todo.id !== id);
    if(!todo.uid) return;
    this.todoService.delete(todo.uid).then(()=>{
      console.log('Todo deleted with ID:', todo.uid);
      this.fetchTodos();
    }).catch((error)=>{
      console.error('Error deleting todo:', error);
    });
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
        uid: todo.uid || '',
        title: todo.title,
        description: todo.description
      });
    }
  }

    get title() {
    return this.todoForm.get('title');
  }

  resetForm(){
    this.todoForm.reset();
  }
}

