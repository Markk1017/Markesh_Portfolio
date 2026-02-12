import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  position: string;
  company: string;
  // duration: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: WorkExperience[] = [
    {
      position: 'Software Developer',
      company: 'Lince Soft Solutions',
      
      period: 'Nov 2024 - Present',
      description: 'Working on a Volunteer Management System (VMS) focused on managing volunteer registrations, approvals, event participation, and administrative operations through a robust backend-driven architecture.',
      responsibilities: [
        'Designed and developed RESTful APIs using ASP.NET Core Web API to support volunteer onboarding, event management, and administrative workflows.',
        'Implemented business logic and backend modules for volunteer registration, approval processes, and participation tracking.',
        'Developed real-time notification features using SignalR to reflect status updates and activity changes instantly.',
        'Implemented authentication and role-based authorization to secure system access and protect sensitive data.',
        'Optimized database queries and improved API performance to ensure system reliability and scalability.'
      ],
      technologies: ['C#','ASP.NET Core Web API', 'Entity Framework Core', 'SQL Server', 'SignalR']
    },
    {
      position: 'Associate Engineer - .NET Developer',
      company: 'Assemblage Entertainment',
      
      period: 'Apr 2022 - Nov 2024',
      description: 'Worked on an internal production pipeline tracking and workflow management system used by multiple teams to manage submissions, approvals, asset tracking, and production progress across departments.',
      responsibilities: [
        'Developed and enhanced backend modules using ASP.NET Core MVC, Web API, ADO.NET, and SQL Server to support production workflow tracking.',
        'Implemented features for work submission, approval management, and asset tracking across different production stages.',
        'Designed and executed SQL queries, stored procedures, and database operations using ADO.NET for efficient data access and performance.',
        'Collaborated with cross-functional teams including artists, leads, and editors to understand requirements and improve system usability.',
        'Troubleshot issues, enhanced existing features, and supported ongoing improvements to internal production tools.'
      ],
      technologies: ['C#','ASP.NET Core MVC', 'Web API','ADO.NET',  'SQL Server','Razor View Pages']
    },
    
  ];
}
