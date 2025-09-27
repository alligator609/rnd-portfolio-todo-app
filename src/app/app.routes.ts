import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

export const routes: Routes = [
{ path: 'about', component: About },
{ path: 'home', component: Home },
{ path: 'contact', component: Contact },
{ path: 'projects', component: Projects },
{ path: '', redirectTo: 'home', pathMatch: 'full' }, // default route
];
