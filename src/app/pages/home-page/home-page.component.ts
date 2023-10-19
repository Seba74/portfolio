import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title: string = 'Sebastian Guevara';
  subtitle: string = 'Full Stack Developer';
}
