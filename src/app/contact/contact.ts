import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { AboutMe } from '../about-me/about-me';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true,
  imports: [AboutMe]
})
export class Contact {

}
