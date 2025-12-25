import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  skills = [
    { name: '.NET', asset:'assets/net.png' },
    { name: 'Angular', asset:'assets/angular.png' },
    { name: 'IONIC', asset:'assets/ionic.png' },
    { name: 'Laravel', asset:'assets/laravel.png' },
    { name: 'MongoDB', asset:'assets/mongodb.svg' },
    { name: 'Docker', asset:'assets/docker.png' },
    { name: 'AWS', asset:'assets/aws.png' },
    { name: 'TypeScript', asset:'assets/typescript.png' },
    { name: 'NestJS', asset:'assets/nest.svg' },
  ];

  stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '1', label: 'Current Companies' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  featuredProjects = [
    {
      name: 'Maaisha Tours & Travels Sdn Bhd',
      description: 'B2B & B2C ticketing platform with .NET and Angular',
      tech: ['.NET', 'Angular', 'MongoDB'],
      link: '/projects'
    },
    {
      name: 'Techno Travel',
      description: 'Complete travel platform with hotels and cruise booking',
      tech: ['Angular', 'MongoDB', 'Redis'],
      link: '/projects'
    },
    {
      name: 'Compounder',
      description: 'Doctor appointment and real-time scheduling mobile app',
      tech: ['Ionic', '.NET', 'SignalR'],
      link: '/projects'
    }
  ];
}
