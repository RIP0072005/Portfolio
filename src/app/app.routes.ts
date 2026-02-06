import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : 'home', component: HomeComponent, title: 'Home'},
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'services', component: ServicesComponent, title: 'Services' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience' },
  {path: '**', component: ErrorComponent, title: 'Error 404'},
];