import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      icon: '🛠️',
      skills: [
        { name: 'ASP.NET Core / Web API' },
        { name: 'C# & .NET Framework' },
        { name: 'Entity Framework Core' },
        { name: 'SQL Server' },
        { name: 'RESTful API Design' },
        { name: 'Performance Optimization' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🌐',
      skills: [
        { name: 'Angular' },
        { name: 'JavaScript' },
        { name: 'HTML5 & CSS3' },
        
        { name: 'Bootstrap' },
        
        { name: 'Component-Based UI Development' }
      ]
    },
    {
      title: 'Database & ORM',
      icon: '🗄️',
      skills: [
        { name: 'SQL Server' },
        { name: 'Entity Framework Core' },
        { name: 'Query Optimization' },
        { name: 'Database Design' },
        { name: 'Stored Procedures' }
      ]
    },
    {
      title: 'APIs & Security',
      icon: '🔒',
      skills: [
        { name: 'JWT Authentication' },
      { name: 'Role-Based Authorization' },
        { name: 'API Versioning' },
        { name: 'Data Validation' },
        { name: 'Secure API Development' }
        
        
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: '⚙️',
      skills: [
        { name: 'Git & GitHub' },
        
        { name: 'Postman & Swagger' },
        { name: 'Visual Studio / VS Code' },
        { name: 'SQL Server Management Studio (SSMS)' },
        { name: 'Agile Development' },
        { name: 'Debugging, Troubleshooting & Performance Optimization' }
      ]
    },
   
  ];
}
