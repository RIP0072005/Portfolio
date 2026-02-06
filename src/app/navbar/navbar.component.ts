import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLightMode : boolean = false;
  ngOnInit() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        this.isLightMode = true;
        document.body.classList.add('light-mode');
    }
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
  }

// MDN -> 
// 
//active link switcher



// const links = document.querySelectorAll('.nav-link');
// links.forEach(link => {
//     link.addEventListener('click', () => {
//         links.forEach(l => l.classList.remove('active'));
//         link.classList.add('active');
//     });
// });

}
