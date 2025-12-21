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
    { name: '.NET', icon: '🔷' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'IONIC', icon: '📱' },
    { name: 'Laravel', icon: '🔶' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'TypeScript', icon: '💙' }
  ];

  stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '2', label: 'Current Companies' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  featuredProjects = [
    {
      name: 'Masiba Travels',
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
