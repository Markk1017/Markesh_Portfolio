import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  shortDescription: string;
  techStack: string[];
  detailedDescription: string;
  features: string[];
  challenges?: string;
  outcome?: string;
  demoLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: 'Volunteer Management System',
      thumbnail: 'assets/images/thumbnail_vms.png',
      shortDescription: 'Platform for managing volunteers, opportunities, and system notifications.',
      techStack: ['C#','ASP.NET Core', 'Web API', 'Entity Framework Core', 'SQL Server','SignalR'],
      detailedDescription: 'A backend-driven enterprise platform developed to manage volunteers and opportunities in healthcare and community service programs. The system enables organizations to register volunteers, create opportunities, track participation, and communicate updates through notifications and real-time alerts. The platform supports secure user authentication, opportunity management, enrollment workflows, dashboards, and system-wide notifications. Built using ASP.NET Core Web API, the application focuses on reliable data handling, performance, and seamless integration with the frontend system.'  ,
      features: [
        'Volunteer and opportunity management through REST APIs',
        'Secure authentication and role-based access',
        'Opportunity enrollment and participation tracking',
        'Real-time updates and alerts using SignalR',
        'Email notification integration for approvals and system updates',
        'Dashboard data APIs for analytics and reporting',
        'Database-driven workflows and data processing'
      ],
      challenges: 'Handled complex database operations and performance optimization for large datasets by improving SQL queries and using efficient data access patterns with EF Core. Worked on resolving API-level bugs and enhancing existing features while ensuring smooth communication between backend services and the frontend application.',
      outcome: 'Built reliable backend services that supported core system functionality including data management, notifications, and opportunity workflows. Improved system stability, enhanced performance, and ensured seamless integration between backend APIs and frontend modules.',
      
    },
    {
      id: 2,
      title: 'Internal Production Pipeline',
      thumbnail: 'assets/images/thumbnail_pipeline.png',
      shortDescription: 'Internal system for managing production workflows, submissions, approvals, and asset tracking across teams.',
      techStack: ['C#','ASP.NET Core MVC ', 'Web API', 'ADO.NET', 'SQL Server','Razor View Pages'],
      detailedDescription: 'An internal workflow management system developed to streamline production pipeline operations across multiple teams. The platform allowed production teams to submit work, track task progress, manage approvals from leads, and monitor asset movement through different production stages. It supported structured workflow  and coordination between teams. Built using ASP.NET Core MVC with Web API support, the system focused on efficient data handling, structured workflows, and improved operational visibility within the production environment.',
      features: [
        
        'Workflow tracking across multiple production stages',
        'Asset tracking across multiple production stages',
        'API-based integration between internal modules',
        'Role-based access for different team functions',
        'Performance-optimized data access using ADO.NET and SQL Server'
      ],
      challenges: 'Managed complex workflow tracking requirements involving multiple teams and approval stages. Optimized SQL queries and data access logic to handle frequent updates, large asset records, and performance bottlenecks in production environments.',
      outcome: 'Improved visibility into production workflows, streamlined approval processes, and enabled efficient tracking of submissions and assets. Helped stabilize internal operations by enhancing system performance, reducing manual tracking, and supporting smoother coordination across teams.',
      
    },
    {
      id: 3,
      title: 'Portfolio Website',
      thumbnail: 'assets/images/thumbnail_Portfolio.png',
      shortDescription: 'A modern developer portfolio showcasing projects, skills, and experience with a responsive UI and contact integration.',
      techStack: ['Angular', 'HTML', 'CSS', 'Bootstrap'],
      detailedDescription: 'A personal portfolio website built to present my professional background, technical skills, and project work in a clean, interactive, and responsive layout. Designed to serve as a central platform for recruiters to explore my work and connect with me easily.',
      features: [
        'Responsive single-page design',
        'Sections for About, Skills, Experience, Projects, and Education',
        'Resume download functionality',
        'Prescription management',
        'Contact form with email integration'
        
      ],
      challenges: 'Designed a visually appealing layout while maintaining performance and responsiveness across devices, and structured the content to clearly highlight project experience.',
      outcome: 'Created a professional online presence to showcase skills, projects, and experience, making it easier for recruiters and employers to evaluate my work and reach out for opportunities.',
     
      githubLink: 'https://github.com/Markk1017/Markesh_Portfolio'
    },
    {
      id: 4,
      title: 'Laundry Service Management System',
      thumbnail: 'assets/images/thumbnail_laundryService.png',
      shortDescription: 'A full-stack web application for managing laundry orders, services, pricing, and customer interactions.',
      techStack: ['ASP.NET Core MVC', 'Web API', 'Entity Framework', 'SQL Server', 'Bootstrap','jQuery'],
      detailedDescription: 'A complete web-based laundry service platform that allows users to browse services, place orders, manage addresses, and track order status, while providing admins with tools to manage products, pricing, and orders efficiently.',
      features: [
        'User registration, login, and address management',
        'Dynamic product and service catalog',
        'Cart and order placement with quantity selection',
        'Order summary and status tracking',
        'Admin panel for managing services, orders, and pricing',
        'SQL-based calculations for taxes and totals'
      ],
      challenges: 'Handled large product datasets and dynamic quantity mapping by implementing optimized queries, structured database design, and efficient order processing logic to maintain performance and accuracy.',
      outcome: 'Built a scalable and structured full-stack system that streamlined order handling, improved data organization, and demonstrated strong backend architecture, API integration, and database management skills.',
      githubLink: 'https://github.com/Markk1017/LaundaryApplication'
    },
    {
      id: 5,
      title: 'Expense Tracker',
      thumbnail: 'assets/images/thumbnail_expensetracker.png',
      shortDescription: 'A personal finance management application for tracking daily expenses, categories, and spending insights.',
      techStack: ['Blazor', 'ASP.NET Core Web API', 'Entity Framework','SQL Server' ],
      detailedDescription: 'A full-stack expense tracking application designed to help users monitor their daily spending, categorize expenses, and gain insights into financial habits. The system provides a clean dashboard view, detailed reports, and structured expense management to support better financial planning.',
      features: [
        'Add, edit, and delete expense records',
        'Category-based expense tracking',
        'Dashboard with charts and spending summaries',
        'Monthly and category-wise expense reports',
        'Secure login and user-specific data management',
        'Real-time data updates using API integration'
      ],
      challenges: 'Ensuring accurate data tracking and smooth dashboard performance while handling multiple expense categories. Implemented optimized API calls, structured database design, and efficient query handling to provide quick and reliable financial insights.',
      outcome: 'Created a user-friendly financial management tool that simplifies expense tracking, improves spending visibility, and demonstrates strong skills in API development, database design, and full-stack application architecture.',
      
      githubLink: 'https://github.com/Markk1017/Expense-Tracker'
    }
  ];

  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  onModalBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
}
