import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  // duration: string;
  // description: string;
  // achievements?: string[];
  //coursework?: string[];
}

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  educationList: EducationItem[] = [
    
    {
      degree: 'Bachelor of Science (B.Sc)',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'Andhra University',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      period: '2018 - 2021',
      // duration: '2 years',
      // description: 'Focused on science and mathematics, building strong analytical and problem-solving foundation.',
      // achievements: [
      //   'Scored 85% in board examinations',
      //   'Strong performance in Mathematics'
      // ]
    }
    
  ];
}
