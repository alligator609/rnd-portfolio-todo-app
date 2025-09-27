import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from "../nav/nav";
import { AboutMe } from '../about-me/about-me';
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [AboutMe, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
