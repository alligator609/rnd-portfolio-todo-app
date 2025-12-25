import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  techStack: string;
  website?: string;
  category: 'web' | 'mobile' | 'saas';
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  webApplications: Project[] = [
    {
      "name": "QR-Dine",
     "description": "QR-Dine is a comprehensive web application designed to streamline restaurant operations and enhance the dining experience. It enables contactless, app-free ordering through QR codes, while providing powerful management tools for restaurant owners and staff, targeting primarily B2B users with support for efficient customer interactions.",
     "techStack": "Modern web technologies (likely including real-time features similar to SignalR, Angular/React-based frontend, backend APIs, database for menus/orders/analytics)",
     "website": "qrdine.web.app",
     "category": "saas"
    },
    {
       "name": "Atlantic Automobiles",
       "description": "Atlantic Automobiles is a comprehensive web application designed for auto repair shops and garages to manage end-to-end operations efficiently. It facilitates customer and vehicle management, product/service cataloging, invoicing for repairs and sales, stock/inventory tracking, employee attendance and task management, work progress monitoring, expense/purchase handling, and reporting. The system supports recurring vehicle services with auto-reminders, loyalty points for customers, WhatsApp marketing/integration for notifications and communication, multi-language support, and project/progress tracking with percentage completion. ",
       "techStack": "Dotnet, Angular, MongoDB, SignalR etc.",
       "website": "AtlanticAutomobiles",
       "category": "web"
    },
    {
      name: 'Maaisha Tours & Travels Sdn Bhd',
      description: 'The ticketing web application is designed to facilitate the purchase and management of tickets, targeting both B2B and B2C users. The web application is developed using the .NET framework and Angular framework, making use of their powerful features and tools to provide a seamless user experience.',
      techStack: 'Dotnet, Angular, MongoDB, SignalR etc.',
      website: 'MaaishaTravels',
      category: 'web'
    },
    {
      "name": "Hishab Boss",
      "description": "Hishab Boss is a modern Point of Sale (POS) web application built for retail businesses, auto parts shops, garages, and service-oriented outlets. It enables fast and accurate sales processing, product management, customer invoicing, inventory tracking, payment handling, discounts, returns, and detailed sales reporting. The system supports barcode scanning, multiple payment methods, real-time stock updates, customer loyalty points, and multi-user access with role-based permissions (Admin, Cashier/Employee).",
      "techStack": "Dotnet, Angular, MongoDB, SignalR etc.",
      "website": "HishabBoss",
      "category": "web"
    },
    {
      name: 'Techno Travel',
      description: 'This web app is designed for travel industries. Its main goal is to give the customer a proper platform for travelling which includes hotels and cruise everywhere in the world.',
      techStack: '.NET, Angular, MongoDB, SignalR, Redis etc.',
      website: 'Ongoing',
      category: 'web'
    },
    {
      name: 'Delibuddy',
      description: 'To deliver homemade food to customers doorstep. Kitchen make booking and Delibuddy will deliver the food to their customer.',
      techStack: 'Laravel, Ionic, Firebase',
      website: 'Delibuddy.co',
      category: 'web'
    },
    {
      name: 'Trip Express Hotels',
      description: 'Trip express Hotels is a Hotel Booking Engine. You can easily make the online booking of hotels apartments. Activities: Developed: Book hotels & apartment, make payment. Have admin panel and hotel owner panel to manage hotels, rooms and bookings.',
      techStack: 'Laravel Framework, MySQL, HTML5, CSS, JS',
      website: 'https://tripexpresshotels.com/',
      category: 'web'
    },
    {
      name: 'School Management Web Application',
      description: 'Whole school management system. It includes student-teacher info, attendance system, online results etc.',
      techStack: 'PHP (Laravel Framework), MySQL, JavaScript, HTML, CSS.',
      website: 'http://sabujulishayasmin.edu.bd',
      category: 'web'
    },
    {
      name: 'Help n Helper',
      description: 'Helping poor people to raise fund. People can create account ask for help or help others using online banking.',
      techStack: 'PHP, MySQL, JavaScript, HTML, CSS.',
      website: 'http://helpnhelper.com',
      category: 'web'
    },
    {
      name: 'Alhaj Shamsul Hoque Foundation',
      description: 'NGO site with online fundraising and organization portfolio.',
      techStack: 'PHP, MySQL, JavaScript, HTML, CSS.',
      website: 'https://shamsulhoquefoundation.org',
      category: 'web'
    }
  ];

  androidApplications: Project[] = [
    {
      name: 'Compounder',
      description: 'The doctor appointment and real-time scheduling application. The mobile application is developed using Ionic Framework based on Angular. An API is created using .NET framework with Ionic, .NET, Angular, MongoDB, SignalR etc.',
      techStack: 'Ionic, .NET, Angular, MongoDB, SignalR etc.',
      website: 'Compounder',
      category: 'mobile'
    },
    {
      name: 'DELIBUDDY',
      description: 'Food delivery application',
      techStack: 'Typescript (Ionic Framework), Firebase, JavaScript, HTML, CSS.',
      website: 'Delibuddy',
      category: 'mobile'
    },
    {
      name: 'SCHOOL MANAGEMENT APP',
      description: 'Whole school management system.',
      techStack: 'PHP (Laravel Framework), MySQL, JavaScript, HTML, CSS.',
      website: 'Sabujulishayasmin',
      category: 'mobile'
    },
    {
      name: 'Help n Helper (App)',
      description: 'Fundraising app. Helping poor people to raise fund. People can create account ask for help or help others using online banking.',
      techStack: 'Java',
      website: 'Helpernhelper',
      category: 'mobile'
    },
    {
      name: 'BD news',
      description: 'All news in one application. Add your favorite news site update and delete them as you like.',
      techStack: 'Java',
      website: 'Bdnews',
      category: 'mobile'
    },
    {
      name: 'Simple Text Repeater',
      description: 'Text repeater application.',
      techStack: 'Java',
      category: 'mobile'
    }
  ];

  get allProjects(): Project[] {
    return [...this.webApplications, ...this.androidApplications];
  }
}
