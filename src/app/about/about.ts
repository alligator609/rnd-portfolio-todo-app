import { Component } from '@angular/core';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class About {
  profile = {
    name: 'Zia Uddin Ahmed',
    title: 'Software Engineer | .NET, Angular, IONIC, Laravel',
    location: 'Chittagong, Bangladesh',
    email: 'ziauddin10@gmail.com',
    github: 'https://github.com/alligator609',
    linkedin: 'https://linkedin.com/in/ziauddinahmed',
    twitter: '@alligator609'
  };

  experience = [
    {
      title: 'SR. Software Engineer (Remote)',
      company: 'Grand Ocean Sdn. Bhd',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2024 - Continuing',
      description: 'Multinational travel agency, Head Office based in Malaysia',
      responsibilities: [
        'Developed and maintained web applications using .NET, Angular, and IONIC',
        'Improved user experience and system performance by 30%'
      ]
    },
    {
      title: 'Software Engineer (Remote)',
      company: 'Panacea PLT',
      location: 'Kuala Lumpur, Malaysia',
      period: 'April 2021 - Continuing',
      description: 'Malaysia-based firm offering IT services for travel agencies',
      responsibilities: [
        'Developed multinational projects for travel agencies',
        'Worked with .NET, Angular, MongoDB, Redis for cross-platform mobile app development',
        'Integrated third-party technologies for efficient project management'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Amaq Pharma People Foundation',
      location: 'Chittagong, Bangladesh',
      period: 'August 2018 - August 2019',
      description: 'Non-profit organization (NPO)',
      responsibilities: [
        'Developed a web-based Learning Management System (LMS)',
        'Responsible for web design, database architecture, and online transaction processing',
        'Managed file upload, collection, fund distribution, and project management',
        'Backend programming using PHP, Laravel, MySQL, and front-end technologies'
      ]
    }
  ];

  education = [
    {
      degree: 'Master of Science in Information and Communication Engineering',
      institution: 'Chittagong University of Engineering & Technology',
      location: 'Chittagong, Bangladesh',
      period: 'Pursuing'
    },
    {
      degree: 'Bachelor of Science in Electronic and Telecommunication Engineering',
      institution: 'International Islamic University Chittagong',
      location: 'Chittagong, Bangladesh',
      period: 'Mar 2014 - Nov 2018'
    }
  ];

  professionalTraining = [
    {
      title: 'Android and IOS App Development',
      institution: 'Venue: Chittagong',
      description: 'Hybrid App Development using Ionic and Capacitor'
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      institution: 'Venue: Chittagong',
      description: 'Organized by: Genuine Computer Learning Center'
    }
  ];

  skills = {
    languages: 'C#, Python, C/C++, SQL, JavaScript, TypeScript, HTML, XML, JSON, CSS, Dart',
    frameworks: 'Angular, IONIC, .NET, Laravel, PHP, ASP.NET, Node.js, Flask, Bootstrap',
    databases: 'MySQL, MSSQL, MongoDB, Redis',
    tools: 'Docker, Kubernetes, CI/CD, Git, SVN',
    cloudDevOps: 'AWS, Azure, Docker, Kubernetes, CI/CD, Git, Docker, Swagger, Scrum',
    other: 'Microservices, RESTful APIs, SQL Server, NoSQL, Redis, RabbitMQ, Kafka, Elasticsearch, C#, Windows, Linux'
  };

  strengths = [
    'Quality focus',
    'Leadership',
    'Project management',
    'Teamwork'
  ];

  languages = [
    'Native: Bangla (Proficient & full working knowledge in English)'
  ];
}
