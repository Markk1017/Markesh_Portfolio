import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isDark = false;
  isNavOpen = false;

  ngOnInit(): void {
    try {
      const saved = localStorage.getItem('site-theme');
      this.isDark = saved === 'dark';
      this.applyTheme();
    } catch {}
  }

  toggleTheme(ev: Event | null) {
    this.isDark = !this.isDark;
    try { localStorage.setItem('site-theme', this.isDark ? 'dark' : 'light'); } catch {}
    this.applyTheme();
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    // prevent body scroll when nav open on small screens
    if (this.isNavOpen) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '';
  }

  closeNav() {
    if (!this.isNavOpen) return;
    this.isNavOpen = false;
    document.body.style.overflow = '';
  }

  private applyTheme() {
    const root = document.documentElement;
    if (this.isDark) root.classList.add('dark'); else root.classList.remove('dark');
  }
}
