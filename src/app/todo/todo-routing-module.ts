import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from './todo/todo';

export const routes: Routes = [
{ path: 'todo', component: Todo },
// { path: 'edit', component: Todo },
// { path: 'add', component: Todo },
{ path: '', redirectTo: 'todo', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
