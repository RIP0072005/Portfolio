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

//   let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('nav');

// menuIcon.onclick = () => {
//     // لما تضغط يضيف كلاس active لو مش موجود، ويشيله لو موجود
//     navbar.classList.toggle('active');
    
//     // اختياري: تغيير شكل الأيقونة لـ X عند الفتح (لو بتستخدم BoxIcons)
//     menuIcon.classList.toggle('bx-x');
// };

isMenuActive: boolean = false;

  // Function بتبدل الحالة لما نضغط على الأيقونة
  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

}
