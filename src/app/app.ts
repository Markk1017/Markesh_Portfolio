import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Education } from './education/education';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   // RouterOutlet,
    Navbar,
    Home,
    About,
    Skills,
    Experience,
    Projects,
    Education,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
