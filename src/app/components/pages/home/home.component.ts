import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'hotels-frontend';
  angularConcepts = ['components', 'services', 'pipes', 'models', 'directives'];
  
}
