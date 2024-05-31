import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'My Movie List';
  currentYear: number = new Date().getFullYear();

  links = [
   { href:'/movies', name:'Movies' }
  ]
}
