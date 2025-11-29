import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { TodoModule } from './todo/todo-module';
import { AuthGuard } from './@services/auth.guard';

export const routes: Routes = [
{ path: 'about', component: About },
{ path: 'home', component: Home },
{ path: 'contact', component: Contact },
{ path: 'projects', component: Projects },
{ path: 'todo', canActivate: [AuthGuard], loadChildren: () => import('./todo/todo-module').then(m => m.TodoModule) },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
{ path: '', redirectTo: 'home', pathMatch: 'full' }, // default route
];
