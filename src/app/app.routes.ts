import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,title:"Home page"},
    {path:"about", component:AboutComponent, title:"About page"},
    {path:"contact", component:ContactComponent, title:"Contact page"}

];
