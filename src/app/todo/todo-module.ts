import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing-module';
import { Todo } from './todo/todo';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoRoutingModule,
    Todo
  ]
})
export class TodoModule { }
